import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-credit',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full h-full bg-[#F5F3FF] flex flex-col overflow-hidden">
      <div class="w-full bg-neutral-black pt-10 pb-4 px-4 flex items-center shrink-0">
        <button (click)="navigateBack()" class="w-10 h-10 flex items-center justify-center mr-2 active:scale-95 transition-transform">
          <span class="material-icons text-white">arrow_back</span>
        </button>
        <span class="text-white font-bold text-lg">Crédito de viaje</span>
      </div>
      <div class="flex-1 overflow-y-auto p-6 flex flex-col items-center">
        <div class="w-20 h-20 bg-brand-purple/20 rounded-full flex items-center justify-center mb-4">
           <span class="material-icons text-brand-purple text-4xl">account_balance_wallet</span>
        </div>
        <span class="text-gray-500 font-semibold text-sm uppercase tracking-widest">Saldo a favor</span>
        <span class="text-neutral-black font-black text-5xl mt-2">$25.000</span>
        <p class="text-center text-gray-500 text-sm mt-4">
          Este saldo se aplicará automáticamente como descuento en tu próxima compra de tiquetes.
        </p>
      </div>
    </div>
  `
})
export class TravelCredit {
  constructor(private router: Router) {}
  navigateBack() { this.router.navigate(['/profile']); }
}
