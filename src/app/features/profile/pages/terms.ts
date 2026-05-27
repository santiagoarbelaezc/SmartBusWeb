import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full h-full bg-[#F5F3FF] flex flex-col overflow-hidden">
      <div class="w-full bg-neutral-black pt-10 pb-4 px-4 flex items-center shrink-0 shadow-md relative z-10">
        <button (click)="navigateBack()" class="w-10 h-10 flex items-center justify-center mr-2 active:scale-95 transition-transform">
          <span class="material-icons text-white">arrow_back</span>
        </button>
        <span class="text-white font-bold text-lg">Términos y Condiciones</span>
      </div>
      <div class="flex-1 overflow-y-auto p-6 bg-white">
        <h2 class="text-neutral-black font-black text-2xl mb-4">Políticas de Privacidad y Uso</h2>
        <p class="text-gray-500 text-sm leading-relaxed mb-4">
          Última actualización: Mayo 2026<br><br>
          Al utilizar la aplicación SmartBus, aceptas estos términos y condiciones en su totalidad. No uses la aplicación si no estás de acuerdo con alguno de los términos.
          <br><br>
          <strong class="text-neutral-black">1. Uso del Servicio</strong><br>
          SmartBus te permite buscar, reservar y pagar tiquetes de bus para diferentes destinos. Nos reservamos el derecho de modificar o suspender el servicio en cualquier momento.
          <br><br>
          <strong class="text-neutral-black">2. Pagos y Reembolsos</strong><br>
          Todos los pagos realizados a través de la aplicación son procesados de forma segura. Las políticas de reembolso dependen de la empresa de transporte seleccionada.
          <br><br>
          <strong class="text-neutral-black">3. Privacidad de Datos</strong><br>
          Tu información personal, incluyendo datos de pago y ubicación, es protegida mediante cifrado y no será compartida con terceros sin tu consentimiento.
        </p>
      </div>
    </div>
  `
})
export class Terms {
  constructor(private router: Router) {}
  navigateBack() { this.router.navigate(['/profile']); }
}
