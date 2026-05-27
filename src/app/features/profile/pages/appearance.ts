import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appearance',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full h-full bg-white flex flex-col overflow-hidden">
      <div class="w-full bg-brand-primary-dark pt-10 pb-4 px-4 flex items-center shrink-0">
        <button (click)="navigateBack()" class="w-10 h-10 flex items-center justify-center mr-2 active:scale-95 transition-transform">
          <span class="material-icons text-white">arrow_back</span>
        </button>
        <span class="text-white font-bold text-lg">Apariencia</span>
      </div>
      <div class="flex-1 overflow-y-auto p-6">
        <h2 class="text-neutral-black font-bold text-base mb-4">Tema de la aplicación</h2>
        <div class="flex flex-col gap-3">
          <div class="w-full bg-white rounded-xl shadow-sm border-2 border-brand-primary p-4 flex items-center justify-between cursor-pointer">
            <div class="flex items-center gap-3">
              <span class="material-icons text-brand-primary">light_mode</span>
              <span class="font-bold text-neutral-black">Claro</span>
            </div>
            <span class="material-icons text-brand-primary">radio_button_checked</span>
          </div>
          <div class="w-full bg-white rounded-xl shadow-sm border border-transparent p-4 flex items-center justify-between cursor-pointer">
            <div class="flex items-center gap-3">
              <span class="material-icons text-gray-400">dark_mode</span>
              <span class="font-medium text-gray-500">Oscuro</span>
            </div>
            <span class="material-icons text-gray-300">radio_button_unchecked</span>
          </div>
          <div class="w-full bg-white rounded-xl shadow-sm border border-transparent p-4 flex items-center justify-between cursor-pointer">
            <div class="flex items-center gap-3">
              <span class="material-icons text-gray-400">settings_brightness</span>
              <span class="font-medium text-gray-500">Sistema</span>
            </div>
            <span class="material-icons text-gray-300">radio_button_unchecked</span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class Appearance {
  constructor(private router: Router) {}
  navigateBack() { this.router.navigate(['/profile']); }
}
