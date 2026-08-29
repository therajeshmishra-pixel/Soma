const fs = require('fs');
const file = '/Users/rajeshmishra/Website/Soma_webSite_Focussed/src/components/Layout.jsx';
let lines = fs.readFileSync(file, 'utf8').split('\n');

// Find boundaries
const findIndex = (str) => lines.findIndex(l => l.includes(str));

const desktopFounderStart = findIndex('{/* About Dropdown */}');
const desktopCorporateStart = findIndex('{/* Corporate Dropdown */}');
const mobileCorporateStart = lines.findIndex((l, i) => i > desktopCorporateStart && l.includes('setIsMobileCorporateOpen'));
const mobileCorporateButtonStart = mobileCorporateStart - 1; // <button
const mobileFounderStart = lines.findIndex((l, i) => i > desktopCorporateStart && l.includes('setIsMobileFounderOpen'));
const mobileFounderButtonStart = mobileFounderStart - 1; // <button

console.log("D: Founder:", desktopFounderStart, "Corp:", desktopCorporateStart);
console.log("M: Founder:", mobileFounderButtonStart, "Corp:", mobileCorporateButtonStart);

// We need to find the ends.
// For Desktop Founder:
let desktopFounderEnd = -1;
for (let i = desktopFounderStart + 1; i < desktopCorporateStart; i++) {
    if (lines[i].includes('</div>')) {
        // actually there are multiple nested divs.
    }
}
