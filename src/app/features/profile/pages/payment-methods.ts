import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-methods',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full h-full bg-[#F5F6F8] flex flex-col overflow-hidden">
      <div class="w-full bg-neutral-black pt-10 pb-4 px-4 flex items-center shrink-0">
        <button (click)="navigateBack()" class="w-10 h-10 flex items-center justify-center mr-2 active:scale-95 transition-transform">
          <span class="material-icons text-white">arrow_back</span>
        </button>
        <span class="text-white font-bold text-lg">Métodos de Pago</span>
      </div>
      <div class="flex-1 overflow-y-auto p-6">
        <h2 class="text-neutral-black font-bold text-base mb-4">Tus tarjetas guardadas</h2>
        <div class="flex flex-col gap-4">
          
          <div class="w-full h-[180px] bg-gradient-to-br from-neutral-black to-neutral-charcoal rounded-2xl p-5 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div class="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full"></div>
            <div class="flex justify-between items-start">
              <span class="material-icons text-white">credit_card</span>
              <span class="text-brand-gold font-extrabold italic">VISA</span>
            </div>
            <div class="flex flex-col">
              <span class="text-white/80 tracking-widest font-mono text-lg">**** **** **** 4242</span>
              <div class="flex justify-between items-end mt-2">
                <span class="text-white font-bold text-sm">SANTIAGO ARBELAEZ</span>
                <span class="text-white/60 text-xs font-mono">12/25</span>
              </div>
            </div>
          </div>

          <button class="w-full border-2 border-dashed border-gray-300 rounded-2xl py-4 flex items-center justify-center gap-2 text-gray-500 font-bold active:bg-gray-50 transition-colors">
            <span class="material-icons">add</span>
            Añadir nueva tarjeta
          </button>
          
        </div>
      </div>
    </div>
  `
})
export class PaymentMethods {
  constructor(private router: Router) {}
  navigateBack() { this.router.navigate(['/profile']); }
}
