import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-points',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './points.html'
})
export class Points {
  totalPoints = 4250;
  progress = 0.85;
  pointsToNextLevel = 1250;
  isSimulating = false;

  constructor(private cdr: ChangeDetectorRef) {}

  simulateEarningPoints() {
    if (this.isSimulating) return;
    this.isSimulating = true;
    
    const targetPoints = this.totalPoints + 250;
    const increment = 10;
    const steps = 250 / increment; 
    const delay = 40; // 1 second total (25 steps * 40ms)
    
    let currentStep = 0;
    const interval = setInterval(() => {
      this.totalPoints += increment;
      this.pointsToNextLevel -= increment;
      this.progress += (0.04 / steps); // From 85% to 89%
      
      this.cdr.detectChanges();
      
      currentStep++;
      if (currentStep >= steps) {
        clearInterval(interval);
        
        // Agregamos al historial
        this.history.unshift({
          description: 'Viaje Armenia - Pereira',
          date: 'Hoy',
          amount: 250
        });
        
        setTimeout(() => {
          this.isSimulating = false;
          this.cdr.detectChanges();
        }, 1500);
      }
    }, delay);
  }

  benefits = [
    '25% extra de puntos en compras',
    'Acceso prioritario a salas VIP',
    'Cambios de fecha sin costo'
  ];

  history = [
    { description: 'Viaje Bogotá - Medellín', date: '12 May 2024', amount: 450 },
    { description: 'Bono de bienvenida', date: '01 May 2024', amount: 3800 }
  ];
}
