const fs = require('fs');
const path = '/Users/rajeshmishra/Website/Soma_webSite_Focussed/src/components/ProtocolEnquiryModal.jsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/amber/g, 'teal');
content = content.replace(/rose/g, 'sky');
content = content.replace(/emerald/g, 'cyan');
content = content.replace(/purple/g, 'blue');
content = content.replace(/indigo/g, 'cyan');

fs.writeFileSync(path, content);
console.log('Palette forced on Modal');
