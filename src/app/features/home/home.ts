import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html'
})
export class Home {
  userName = 'Santiago Arbeláez';
  greeting = 'Buenos días ☀️';

  quickAccess = [
    { icon: 'search', label: 'Buscar', route: '/search' },
    { icon: 'confirmation_number', label: 'Tiquetes', route: '/tickets' },
    { icon: 'my_location', label: 'Rastreo', route: '/tracking' },
    { icon: 'card_giftcard', label: 'Puntos', route: '/points' }
  ];

  stats = [
    { icon: 'directions_bus', value: '1,240+', label: 'Rutas activas' },
    { icon: 'people', value: '320K+', label: 'Viajeros / mes' },
    { icon: 'star', value: '4.8', label: 'Calificación' },
    { icon: 'shield', value: '99.2%', label: 'Puntualidad' }
  ];

  promos = [
    { title: 'Armenia 20% OFF', description: 'Viaja este fin de semana', gradient: 'from-[#1A0533] to-[#2D0A5B]' },
    { title: 'Ruta del Café', description: 'Conoce los paisajes', gradient: 'from-[#0A1628] to-[#0D2137]' },
    { title: 'Promo Flash', description: 'Bogotá express', gradient: 'from-[#1A1208] to-[#2C1F00]' }
  ];

  partners = ['Bolivariano', 'Flota', 'Gacela', 'Tinto', 'SmartBus'];

  tips = [
    { icon: 'schedule', color: 'bg-[#0D47A1]', title: 'Llega 10 min antes', body: 'Los buses salen puntual. Planea con tiempo.', tag: 'Consejo' },
    { icon: 'qr_code', color: 'bg-[#1B5E20]', title: 'Muestra tu QR', body: 'Asegúrate de tener el QR descargado.', tag: 'Recordatorio' }
  ];

  filters = ['Todos', 'Populares', 'Económicos', 'Rápidos', 'VIP'];
  selectedFilter = 'Todos';

  routes = [
    { origin: 'Bogotá', destination: 'Medellín', time: '12:45 PM', duration: '8h 30m', price: '$85.000', company: 'Bolivariano', status: 'Disponible' },
    { origin: 'Cali', destination: 'Armenia', time: '02:30 PM', duration: '3h 15m', price: '$35.000', company: 'Flota', status: 'Amplio' }
  ];

  constructor(private router: Router) {
    const hour = new Date().getHours();
    if (hour >= 12 && hour < 18) this.greeting = 'Buenas tardes 🌤️';
    else if (hour >= 18) this.greeting = 'Buenas noches 🌙';
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
