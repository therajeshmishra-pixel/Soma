const fs = require('fs');
const path = '/Users/rajeshmishra/Website/Soma_webSite_Focussed/src/components/ui/CustomSelect.jsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/amber/g, 'teal');

fs.writeFileSync(path, content);
console.log('Palette forced on CustomSelect');
