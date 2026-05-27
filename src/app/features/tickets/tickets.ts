import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tickets.html'
})
export class Tickets {
  selectedTab = 0;
  tabs = ['Activos', 'Historial'];

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

  toggleExpand(ticket: any) {
    ticket.expanded = !ticket.expanded;
  }
}
