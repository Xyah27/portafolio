const fs = require('fs');
const content = fs.readFileSync('app/page.tsx', 'utf8');
const fixed = content.replace(/fill-rule="evenodd" clip-rule="evenodd"/g, 'fillRule="evenodd" clipRule="evenodd"');
fs.writeFileSync('app/page.tsx', fixed);
console.log('Fixed SVG attributes');
