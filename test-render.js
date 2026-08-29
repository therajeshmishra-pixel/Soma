import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('FAILED REQUEST:', request.url(), request.failure().errorText));
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 10000 }).catch(e => console.log(e.message));
  const bodyContent = await page.evaluate(() => document.body.innerHTML);
  console.log('BODY LENGTH:', bodyContent.length);
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
})();
