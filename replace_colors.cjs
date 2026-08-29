const fs = require('fs');
const path = '/Users/rajeshmishra/Website/Soma_webSite_Focussed/src/pages/Assessment.jsx';
let content = fs.readFileSync(path, 'utf8');

// Replace general theme colors
content = content.replace(/from-amber-50 to-rose-50/g, 'from-teal-50 to-sky-50');
content = content.replace(/bg-amber-/g, 'bg-teal-');
content = content.replace(/text-amber-/g, 'text-teal-');
content = content.replace(/border-amber-/g, 'border-teal-');
content = content.replace(/ring-amber-/g, 'ring-teal-');
content = content.replace(/shadow-amber-/g, 'shadow-teal-');
content = content.replace(/from-amber-/g, 'from-teal-');
content = content.replace(/to-rose-/g, 'to-sky-');
content = content.replace(/text-rose-500/g, 'text-sky-500');
content = content.replace(/bg-rose-50/g, 'bg-sky-50');
content = content.replace(/accent-amber-500/g, 'accent-teal-500');

// Replace the colors array in Hub Grid
const oldColors = `const colors = [
                  { grad: 'from-amber-400 to-orange-400', glow: 'bg-amber-400/20', text: 'text-amber-600', bg: 'bg-amber-50', hover: 'group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-orange-500', border: 'border-amber-100' },
                  { grad: 'from-cyan-400 to-indigo-400', glow: 'bg-cyan-400/20', text: 'text-cyan-600', bg: 'bg-cyan-50', hover: 'group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-indigo-500', border: 'border-cyan-100' },
                  { grad: 'from-emerald-400 to-teal-400', glow: 'bg-emerald-400/20', text: 'text-emerald-600', bg: 'bg-emerald-50', hover: 'group-hover:bg-gradient-to-br group-hover:from-emerald-400 group-hover:to-teal-500', border: 'border-emerald-100' },
                  { grad: 'from-violet-400 to-fuchsia-400', glow: 'bg-violet-400/20', text: 'text-violet-600', bg: 'bg-violet-50', hover: 'group-hover:bg-gradient-to-br group-hover:from-violet-400 group-hover:to-fuchsia-500', border: 'border-violet-100' }
                ];`;

const newColors = `const colors = [
                  { grad: 'from-teal-400 to-cyan-400', glow: 'bg-teal-400/20', text: 'text-teal-600', bg: 'bg-teal-50', hover: 'group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-cyan-500', border: 'border-teal-100' },
                  { grad: 'from-cyan-400 to-sky-400', glow: 'bg-cyan-400/20', text: 'text-cyan-600', bg: 'bg-cyan-50', hover: 'group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-sky-500', border: 'border-cyan-100' },
                  { grad: 'from-sky-400 to-blue-400', glow: 'bg-sky-400/20', text: 'text-sky-600', bg: 'bg-sky-50', hover: 'group-hover:bg-gradient-to-br group-hover:from-sky-400 group-hover:to-blue-500', border: 'border-sky-100' },
                  { grad: 'from-blue-400 to-indigo-400', glow: 'bg-blue-400/20', text: 'text-blue-600', bg: 'bg-blue-50', hover: 'group-hover:bg-gradient-to-br group-hover:from-blue-400 group-hover:to-indigo-500', border: 'border-blue-100' }
                ];`;

content = content.replace(oldColors, newColors);

fs.writeFileSync(path, content);
console.log('Done replacing colors in Assessment.jsx');
