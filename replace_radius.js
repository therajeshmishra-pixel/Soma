const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function findAndReplaceInFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findAndReplaceInFiles(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // We want to replace rounded-sm, rounded-md, rounded-lg, rounded-xl, rounded-2xl, rounded with rounded-3xl
      // but NOT rounded-full or rounded-l-md or rounded-t-lg
      
      // Pattern: rounded, rounded-sm, rounded-md, rounded-lg, rounded-xl, rounded-2xl
      content = content.replace(/\brounded-(sm|md|lg|xl|2xl)\b/g, 'rounded-3xl');
      content = content.replace(/\brounded\b(?!\-)/g, 'rounded-3xl');
      
      // There are some weird "rounded-" typos seen in grep (src/pages/Corporate.jsx:rounded- , Home, Portal)
      content = content.replace(/\brounded-\b/g, 'rounded-3xl ');

      fs.writeFileSync(fullPath, content);
      console.log(`Updated ${fullPath}`);
    }
  }
}

findAndReplaceInFiles(directoryPath);
