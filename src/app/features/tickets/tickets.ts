import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tickets.html'
})
export class Tickets {
  selectedTab = 0;
  tabs = ['Mis Tiquetes', 'Mis Puntos'];

  activeTickets = [
    {
      id: 'SB-10492',
      origin: 'Bogotá',
      destination: 'Tunja',
      companyName: 'Bolivariano',
      status: 'A Tiempo',
      seat: '24 (Ventana)',
      terminal: 'Puerta 04',
      expanded: false
    }
  ];
  historyTickets = [];

  // Puntos State
  totalPoints = 4250;
  progress = 0.85;
  pointsToNextLevel = 1250;
  isSimulating = false;

  benefits = [
    '25% extra de puntos en compras',
    'Acceso prioritario a salas VIP',
    'Cambios de fecha sin costo'
  ];

  history = [
    { description: 'Viaje Bogotá - Medellín', date: '12 May 2024', amount: 450 },
    { description: 'Bono de bienvenida', date: '01 May 2024', amount: 3800 }
  ];

  constructor(public router: Router, private cdr: ChangeDetectorRef) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state && nav.extras.state['tab'] === 'points') {
      this.selectedTab = 1;
    }
  }

  toggleExpand(ticket: any) {
    ticket.expanded = !ticket.expanded;
  }

  simulateEarningPoints() {
    if (this.isSimulating) return;
    this.isSimulating = true;
    
    const increment = 10;
    const steps = 250 / increment; 
    const delay = 40;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      this.totalPoints += increment;
      this.pointsToNextLevel -= increment;
      this.progress += (0.04 / steps);
      
      this.cdr.detectChanges();
      
      currentStep++;
      if (currentStep >= steps) {
        clearInterval(interval);
        
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
}
