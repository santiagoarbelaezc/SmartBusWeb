import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full h-full bg-[#F5F3FF] flex flex-col overflow-hidden">
      <div class="w-full bg-neutral-black pt-10 pb-4 px-4 flex items-center shrink-0">
        <button (click)="navigateBack()" class="w-10 h-10 flex items-center justify-center mr-2 active:scale-95 transition-transform">
          <span class="material-icons text-white">arrow_back</span>
        </button>
        <span class="text-white font-bold text-lg">Ayuda y Soporte</span>
      </div>
      <div class="flex-1 overflow-y-auto p-6">
        <h2 class="text-neutral-black font-bold text-xl mb-6">¿Cómo podemos ayudarte?</h2>
        
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white rounded-2xl p-5 shadow-sm flex flex-col items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform">
            <span class="material-icons text-brand-purple text-3xl">chat</span>
            <span class="font-bold text-neutral-black text-sm text-center">Chat en vivo</span>
          </div>
          <div class="bg-white rounded-2xl p-5 shadow-sm flex flex-col items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform">
            <span class="material-icons text-brand-purple text-3xl">phone</span>
            <span class="font-bold text-neutral-black text-sm text-center">Llamar ahora</span>
          </div>
          <div class="bg-white rounded-2xl p-5 shadow-sm flex flex-col items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform">
            <span class="material-icons text-brand-purple text-3xl">email</span>
            <span class="font-bold text-neutral-black text-sm text-center">Enviar correo</span>
          </div>
          <div class="bg-white rounded-2xl p-5 shadow-sm flex flex-col items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform">
            <span class="material-icons text-brand-purple text-3xl">help_center</span>
            <span class="font-bold text-neutral-black text-sm text-center">Preguntas Frecuentes</span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class Support {
  constructor(private router: Router) {}
  navigateBack() { this.router.navigate(['/profile']); }
}
