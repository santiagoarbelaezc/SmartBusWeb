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
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content
    // Replace dark backgrounds for headers to Azul Marino
    .replace(/bg-neutral-black/g, 'bg-brand-primary-dark')
    // In search.html, replace the form background to Azul Institucional
    .replace(/bg-neutral-charcoal/g, 'bg-brand-primary');

  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log(`Fixed backgrounds in ${file}`);
  }
});
