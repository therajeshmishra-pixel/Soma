const fs = require('fs');
const file = '/Users/rajeshmishra/Website/Soma_webSite_Focussed/src/components/Layout.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace "The Founder" texts with "About"
content = content.replace(/The Founder/g, 'About');

const founderDesktopRegex = /(\{\/\* The Founder Dropdown \*\/\}\s*<div[\s\S]*?<\/div>\s*)\{\/\* Corporate Dropdown \*\/\}/;
// Actually, using regex for HTML might be flaky. Let's do it exactly by splitting.

