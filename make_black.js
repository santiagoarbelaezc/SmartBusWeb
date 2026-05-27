const fs = require('fs');
const path = require('path');

function makeBlack(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  let newContent = content
    .replace(/bg-brand-primary-dark/g, 'bg-[#0A0A0A]')
    .replace(/bg-brand-primary/g, 'bg-[#1A1A1A]')
    .replace(/text-brand-primary/g, 'text-white')
    .replace(/border-brand-primary/g, 'border-white/20')
    .replace(/shadow-brand-primary/g, 'shadow-white')
    .replace(/text-brand-primary-light/g, 'text-gray-400')
    .replace(/text-brand-primary-dark/g, 'text-white')
    .replace(/from-brand-primary-dark/g, 'from-[#0A0A0A]')
    .replace(/from-brand-primary/g, 'from-[#1A1A1A]')
    .replace(/to-brand-primary-dark/g, 'to-[#0A0A0A]')
    .replace(/to-brand-primary/g, 'to-[#1A1A1A]');

  // For payment specifically, the button might have text-white on bg-[#1A1A1A], let's make the button white with black text for contrast
  if (filePath.includes('payment.html')) {
    newContent = newContent.replace(/class="w-full h-\[52px\] bg-\[\#1A1A1A\] rounded-2xl flex items-center justify-center mb-6 shadow-lg active:scale-95 transition-transform relative overflow-hidden"/g, 'class="w-full h-[52px] bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg active:scale-95 transition-transform relative overflow-hidden"');
    newContent = newContent.replace(/<span class="text-white font-extrabold text-base">Pagar/g, '<span class="text-black font-extrabold text-base">Pagar');
  }
  
  if (filePath.includes('seat-selection.html')) {
    newContent = newContent.replace(/bg-\[\#1A1A1A\] border-white\/20 cursor-pointer shadow-white\/50/g, 'bg-white border-white cursor-pointer shadow-white/50'); // Selected seat
  }

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated ${filePath}`);
  }
}

makeBlack('src/app/features/payment/payment.html');
makeBlack('src/app/features/seat-selection/seat-selection.html');
