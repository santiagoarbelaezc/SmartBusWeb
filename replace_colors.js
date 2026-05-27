const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.html') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('src/app');
let updatedCount = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content
    .replace(/brand-gold/g, 'brand-purple')
    .replace(/#F5F6F8/g, '#F5F3FF')
    .replace(/#D4AF37/g, '#7C3AED') // If any raw gold hex was used
    .replace(/#121212/g, '#1E1B2E') // If any raw black hex was used
    .replace(/#1E1E1E/g, '#2B2543'); // If any raw charcoal hex was used
    
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    updatedCount++;
    console.log(`Updated ${file}`);
  }
});
console.log(`Successfully updated ${updatedCount} files.`);
