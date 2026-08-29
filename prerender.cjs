const puppeteer = require('puppeteer');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3055;
const DIST_DIR = path.join(__dirname, 'dist');

app.use(express.static(DIST_DIR));
app.use((req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

const server = app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT} for prerendering...`);
  
  const browser = await puppeteer.launch({ headless: 'new' });
  
  const routes = [
    '/',
    '/corporate',
    '/programs',
    '/about',
    '/contact',
    '/assessment',
    '/corporate/desktop',
    '/corporate/wellness',
    '/corporate/workshops',
    '/corporate/connection',
    '/corporate/architect',
    '/programs/sleep',
    '/programs/cognitive',
    '/programs/digital',
    '/programs/metabolic',
    '/programs/sanctuary',
    '/programs/counselling',
    '/blog',
    '/privacy',
    '/standards',
    '/terms'
  ];

  for (const route of routes) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route}`;
    console.log(`Prerendering ${route}...`);
    
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    
    // Fix Framer Motion SEO Issue: Search engines ignore content with opacity: 0
    await page.evaluate(() => {
      document.querySelectorAll('*').forEach(el => {
        if (el.style.opacity === '0' || el.style.opacity === 0) {
          el.style.opacity = '1';
        }
        if (el.style.transform && (el.style.transform.includes('translate') || el.style.transform.includes('scale'))) {
          el.style.transform = 'none';
        }
      });
    });
    
    const html = await page.evaluate(() => document.documentElement.outerHTML);
    
    let filePath;
    if (route === '/') {
      filePath = path.join(DIST_DIR, 'index.html');
    } else {
      const routeDir = path.join(DIST_DIR, route.substring(1));
      fs.mkdirSync(routeDir, { recursive: true });
      filePath = path.join(routeDir, 'index.html');
    }
    
    fs.writeFileSync(filePath, `<!DOCTYPE html>\n<html>\n${html}\n</html>`);
    await page.close();
  }

  await browser.close();
  server.close();
  console.log('Prerendering complete!');
});
