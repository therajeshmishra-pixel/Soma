const fs = require('fs');
const path = require('path');

const baseDir = '/Users/rajeshmishra/Website/Soma_webSite_Focussed/src/pages';
const programFiles = ['ExecutiveSanctuary.jsx', 'DigitalErgonomics.jsx', 'SleepArchitecture.jsx', 'Counselling.jsx', 'MetabolicResilience.jsx', 'CognitiveCalm.jsx'];
const corporateFiles = ['WorkplaceWellness.jsx', 'DesktopInterventions.jsx', 'TheConnection.jsx', 'StrategicWorkshops.jsx', 'SessionArchitect.jsx'];

function addChevronImport(content) {
  if (!content.includes('ChevronRight')) {
    // try to add to lucide-react import
    if (content.includes('from \'lucide-react\'') || content.includes('from "lucide-react"')) {
      content = content.replace(/(import\s+\{[^}]*?)(\}\s+from\s+['"]lucide-react['"])/s, (match, p1, p2) => {
        if (!p1.includes('ChevronRight')) {
          return `${p1}, ChevronRight ${p2}`;
        }
        return match;
      });
    } else {
      content = `import { ChevronRight } from 'lucide-react';\n` + content;
    }
  }
  return content;
}

function processProgramFiles() {
  for (const file of programFiles) {
    const filePath = path.join(baseDir, 'programs', file);
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add ChevronRight import
    content = addChevronImport(content);

    // Update main tag if it has pt-12 (some might not)
    content = content.replace(/<main([^>]+)pt-12([^>]*)>/g, '<main$1$2>');
    
    // Replace breadcrumbs block
    const breadcrumbRegex = /<div className="[^"]*pt-12[^"]*">[\s\S]*?<nav[^>]*>([\s\S]*?)<\/nav>\s*<\/div>/;
    const match = content.match(breadcrumbRegex);
    if (match) {
      // Find the spans used as separators to replace with ChevronRight, but we'll just rewrite it cleanly.
      // We will parse the links.
      const linksMatches = [...match[1].matchAll(/<Link[^>]*to="([^"]+)"[^>]*>(.*?)<\/Link>/g)];
      const currentSpanMatch = match[1].match(/<span className="text-[^"]+">([^<]+)<\/span>\s*$/);
      let lastItem = currentSpanMatch ? currentSpanMatch[1] : '';

      let newNav = `      <div className="px-6 lg:px-16 pt-12 pb-8 max-w-screen-2xl mx-auto relative z-20">\n`;
      newNav += `        <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">\n`;
      
      for (const lm of linksMatches) {
        newNav += `          <Link to="${lm[1]}" className="hover:text-stone-900 transition-colors">${lm[2]}</Link>\n`;
        newNav += `          <ChevronRight size={10} className="text-stone-300" />\n`;
      }
      newNav += `          <span className="text-stone-900">${lastItem}</span>\n`;
      newNav += `        </nav>\n`;
      newNav += `      </div>`;

      content = content.replace(breadcrumbRegex, newNav);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + file);
    }
  }
}

function processCorporateFiles() {
  for (const file of corporateFiles) {
    const filePath = path.join(baseDir, 'corporate', file);
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add ChevronRight import
    content = addChevronImport(content);

    // Update main tag to remove pt-12 if present
    content = content.replace(/<main([^>]+)pt-12([^>]*)>/g, (m, p1, p2) => `<main${p1}${p2}>`.replace('  ', ' '));
    // also remove pt-8 lg:pt-12 for SessionArchitect
    content = content.replace(/<main([^>]+)pt-8 lg:pt-12([^>]*)>/g, '<main$1$2>');
    
    // Replace breadcrumbs block
    // It's usually something like <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-20">
    const breadcrumbRegex = /<div className="max-w-[^"]+ mb-20[^"]*">[\s\S]*?<nav[^>]*>([\s\S]*?)<\/nav>\s*<\/div>/;
    const match = content.match(breadcrumbRegex);
    if (match) {
      const linksMatches = [...match[1].matchAll(/<Link[^>]*to="([^"]+)"[^>]*>(.*?)<\/Link>/g)];
      const currentSpanMatch = match[1].match(/<span className="text-[^"]+">([^<]+)<\/span>\s*$/);
      let lastItem = currentSpanMatch ? currentSpanMatch[1] : '';

      let newNav = `      <div className="px-6 lg:px-16 pt-12 pb-8 max-w-screen-2xl mx-auto relative z-20">\n`;
      newNav += `        <nav className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">\n`;
      
      for (const lm of linksMatches) {
        newNav += `          <Link to="${lm[1]}" className="hover:text-stone-900 transition-colors">${lm[2]}</Link>\n`;
        newNav += `          <ChevronRight size={10} className="text-stone-300" />\n`;
      }
      newNav += `          <span className="text-stone-900">${lastItem}</span>\n`;
      newNav += `        </nav>\n`;
      newNav += `      </div>`;

      content = content.replace(breadcrumbRegex, newNav);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + file);
    }
  }
}

processProgramFiles();
processCorporateFiles();
