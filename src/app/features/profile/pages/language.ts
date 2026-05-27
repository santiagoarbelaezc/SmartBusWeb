import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full h-full bg-white flex flex-col overflow-hidden">
      <div class="w-full bg-brand-primary-dark pt-10 pb-4 px-4 flex items-center shrink-0">
        <button (click)="navigateBack()" class="w-10 h-10 flex items-center justify-center mr-2 active:scale-95 transition-transform">
          <span class="material-icons text-white">arrow_back</span>
        </button>
        <span class="text-white font-bold text-lg">Idioma</span>
      </div>
      <div class="flex-1 overflow-y-auto p-6">
        <h2 class="text-neutral-black font-bold text-base mb-4">Selecciona tu idioma</h2>
        <div class="flex flex-col gap-3">
          <div class="w-full bg-white rounded-xl shadow-sm border-2 border-brand-primary p-4 flex items-center justify-between cursor-pointer">
            <span class="font-bold text-neutral-black">Español</span>
            <span class="material-icons text-brand-primary">check_circle</span>
          </div>
          <div class="w-full bg-white rounded-xl shadow-sm border border-transparent p-4 flex items-center justify-between cursor-pointer">
            <span class="font-medium text-gray-500">English</span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class Language {
  constructor(private router: Router) {}
  navigateBack() { this.router.navigate(['/profile']); }
}
