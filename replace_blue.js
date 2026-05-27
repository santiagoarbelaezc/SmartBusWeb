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
    .replace(/brand-purple/g, 'brand-primary')
    .replace(/bg-\[\#F5F3FF\]/g, 'bg-white')
    .replace(/bg-bg-app/g, 'bg-white')
    .replace(/bg-\[\#F5F6F8\]/g, 'bg-white'); // just in case
    
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    updatedCount++;
    console.log(`Updated ${file}`);
  }
});
console.log(`Successfully updated ${updatedCount} files.`);
