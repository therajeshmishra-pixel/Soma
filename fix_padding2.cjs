const fs = require('fs');
const path = require('path');

function replaceTopPadding(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Contact.jsx
  if (filePath.endsWith('Contact.jsx')) {
    content = content.replace('pt-24 pb-16 lg:pt-32 lg:pb-24', 'pt-8 pb-16 lg:pt-12 lg:pb-24');
  }
  // About.jsx
  else if (filePath.endsWith('About.jsx')) {
    content = content.replace('pt-12 pb-8 max-w-screen-2xl', 'pt-6 pb-2 max-w-screen-2xl');
    content = content.replace('text-sm uppercase tracking-[0.2em] text-amber-600 font-bold', 'text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400');
  }
  // Programs.jsx
  else if (filePath.endsWith('Programs.jsx')) {
    content = content.replace('pt-32 pb-24 lg:pt-40 lg:pb-40', 'pt-8 pb-24 lg:pt-16 lg:pb-40');
  }
  // Corporate.jsx
  else if (filePath.endsWith('Corporate.jsx')) {
    content = content.replace('pt-32 pb-24 lg:pt-40 lg:pb-40', 'pt-8 pb-24 lg:pt-16 lg:pb-40');
    // corporate also has <div className="px-8 lg:px-16 pt-12 pb-8 max-w-screen-2xl mx-auto">? Wait, I don't think I searched for it.
  }
  // Assessment.jsx
  else if (filePath.endsWith('Assessment.jsx')) {
    content = content.replace('pt-8 lg:pt-12 pb-12', 'pt-4 lg:pt-6 pb-12');
  }

  fs.writeFileSync(filePath, content);
}

const files = [
  'src/pages/Contact.jsx',
  'src/pages/About.jsx',
  'src/pages/Programs.jsx',
  'src/pages/Corporate.jsx',
  'src/pages/Assessment.jsx'
];

files.forEach(f => {
  const fullPath = path.join('/Users/rajeshmishra/Website/Soma_webSite_Focussed', f);
  if (fs.existsSync(fullPath)) {
    replaceTopPadding(fullPath);
  }
});
