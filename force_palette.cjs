const fs = require('fs');
const path = '/Users/rajeshmishra/Website/Soma_webSite_Focussed/src/pages/Assessment.jsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/amber/g, 'teal');
content = content.replace(/rose/g, 'sky');
content = content.replace(/orange/g, 'cyan');
content = content.replace(/fuchsia/g, 'blue');
content = content.replace(/violet/g, 'blue');
content = content.replace(/emerald/g, 'cyan');

fs.writeFileSync(path, content);
console.log('Palette forced');
