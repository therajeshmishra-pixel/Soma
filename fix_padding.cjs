const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.jsx')) {
      const fullPath = path.join(dir, file);
      let content = fs.readFileSync(fullPath, 'utf8');

      // 1. Fix Breadcrumb wrapper
      content = content.replace(/className="px-6 lg:px-16 pt-12 pb-8 max-w-screen-2xl mx-auto relative z-20"/g, 
                                'className="px-6 lg:px-16 pt-6 pb-2 max-w-screen-2xl mx-auto relative z-20"');

      // 2. Fix Hero Section top padding (usually the first section after breadcrumb)
      // We can just replace "pt-12 pb-24 lg:pt-20 lg:pb-32" with "pt-4 pb-24 lg:pt-8 lg:pb-32"
      content = content.replace(/pt-12 pb-24 lg:pt-20 lg:pb-32/g, 'pt-4 pb-24 lg:pt-8 lg:pb-32');
      
      // Also some files might have "pt-24 pb-16 lg:pt-32 lg:pb-24" (like Contact.jsx, About.jsx)
      // But we are only running this on programs/ and corporate/
      // Wait, corporate pages have a slightly different hero section padding
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir('/Users/rajeshmishra/Website/Soma_webSite_Focussed/src/pages/programs');
processDir('/Users/rajeshmishra/Website/Soma_webSite_Focussed/src/pages/corporate');
