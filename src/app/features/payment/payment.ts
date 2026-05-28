import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.html'
})
export class Payment {
  route = 'Armenia → Medellín';
  total = '$55.000';
  date = 'Hoy, 15 Abr';
  seat = 'A3';

  methods = [
    { title: 'Tarjeta de Crédito/Débito', icon: 'credit_card' },
    { title: 'PSE', icon: 'account_balance' },
    { title: 'Nequi', icon: 'phone_android' }
  ];

  selectedMethodIndex = 0;
  isProcessing = false;
  isSuccess = false;

  constructor(public router: Router) {}

  navigateBack() {
    this.router.navigate(['/seat-selection']);
  }

  selectMethod(index: number) {
    this.selectedMethodIndex = index;
  }

  pay() {
    this.isProcessing = true;
    setTimeout(() => {
      this.isProcessing = false;
      this.isSuccess = true;
    }, 2000);
  }
}
