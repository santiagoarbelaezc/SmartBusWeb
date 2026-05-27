import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full h-full bg-[#F5F3FF] flex flex-col overflow-hidden">
      <div class="w-full bg-neutral-black pt-10 pb-4 px-4 flex items-center shrink-0">
        <button (click)="navigateBack()" class="w-10 h-10 flex items-center justify-center mr-2 active:scale-95 transition-transform">
          <span class="material-icons text-white">arrow_back</span>
        </button>
        <span class="text-white font-bold text-lg">Notificaciones</span>
      </div>
      <div class="flex-1 overflow-y-auto p-6">
        <div class="flex flex-col gap-4">
          <div class="bg-white rounded-[20px] p-5 shadow-sm flex gap-4 opacity-70">
            <div class="w-10 h-10 bg-brand-purple/20 rounded-full flex items-center justify-center shrink-0">
              <span class="material-icons text-brand-purple">directions_bus</span>
            </div>
            <div class="flex flex-col">
              <span class="text-neutral-black font-bold text-sm">Tu viaje ha finalizado</span>
              <span class="text-gray-500 text-xs mt-1">Esperamos que hayas tenido un excelente viaje hacia Tunja.</span>
              <span class="text-gray-400 text-[10px] mt-2">Ayer, 06:30 PM</span>
            </div>
          </div>
          <div class="bg-white rounded-[20px] p-5 shadow-sm flex gap-4">
            <div class="w-10 h-10 bg-[#0D47A1]/10 rounded-full flex items-center justify-center shrink-0">
              <span class="material-icons text-[#0D47A1]">local_offer</span>
            </div>
            <div class="flex flex-col relative w-full">
              <div class="w-2 h-2 bg-brand-purple rounded-full absolute -right-1 top-1"></div>
              <span class="text-neutral-black font-bold text-sm">¡Tienes un 20% de descuento!</span>
              <span class="text-gray-500 text-xs mt-1">Usa el código VIAJA20 en tu próxima compra de tiquetes.</span>
              <span class="text-gray-400 text-[10px] mt-2">Hace 2 horas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class Notifications {
  constructor(private router: Router) {}
  navigateBack() { this.router.navigate(['/profile']); }
}
