import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full h-full bg-[#F5F3FF] flex flex-col overflow-hidden">
      <div class="w-full bg-neutral-black pt-10 pb-4 px-4 flex items-center shrink-0">
        <button (click)="navigateBack()" class="w-10 h-10 flex items-center justify-center mr-2 active:scale-95 transition-transform">
          <span class="material-icons text-white">arrow_back</span>
        </button>
        <span class="text-white font-bold text-lg">Seguridad</span>
      </div>
      <div class="flex-1 overflow-y-auto p-6">
        <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div class="px-5 py-4 flex justify-between items-center border-b border-gray-100 cursor-pointer active:bg-gray-50">
            <span class="font-semibold text-neutral-black">Cambiar contraseña</span>
            <span class="material-icons text-gray-300">chevron_right</span>
          </div>
          <div class="px-5 py-4 flex justify-between items-center border-b border-gray-100 cursor-pointer active:bg-gray-50">
            <span class="font-semibold text-neutral-black">Autenticación de dos pasos</span>
            <div class="w-10 h-6 bg-green-500 rounded-full relative">
               <div class="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
            </div>
          </div>
          <div class="px-5 py-4 flex justify-between items-center cursor-pointer active:bg-gray-50">
            <span class="font-semibold text-neutral-black">Dispositivos vinculados</span>
            <span class="material-icons text-gray-300">chevron_right</span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class Security {
  constructor(private router: Router) {}
  navigateBack() { this.router.navigate(['/profile']); }
}
