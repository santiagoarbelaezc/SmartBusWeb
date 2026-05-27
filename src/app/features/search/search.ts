import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html'
})
export class Search {
  origin = '';
  destination = '';
  date = 'Hoy, 15 Abr';
  isSearching = false;
  selectedTab = 'INTERCITY'; // 'INTERCITY' | 'URBAN'
  selectedFilter = 'Todos';
  filters = ['Todos', 'Más Económico', 'Más Rápido'];

  routes = [
    {
      companyName: 'Bolivariano',
      isDirect: true,
      tag: 'Popular',
      departureTime: '06:00 AM',
      arrivalTime: '01:00 PM', // Optional, if needed
      duration: '7 horas',
      destination: 'Medellín',
      occupancyLabel: 'Disponible',
      occupancyColor: 'text-[#FFA726]',
      occupancyBg: 'bg-[#FFA726]/10',
      seatsAvailable: 8,
      price: '$55.000'
    },
    {
      companyName: 'Flota Occidental',
      isDirect: false,
      tag: null,
      departureTime: '07:30 AM',
      duration: '8 horas',
      destination: 'Medellín',
      occupancyLabel: 'Amplio',
      occupancyColor: 'text-[#43A047]',
      occupancyBg: 'bg-[#43A047]/10',
      seatsAvailable: 24,
      price: '$48.000'
    }
  ];

  tintoRoutes = [
    {
      line: 'Línea 3',
      name: 'Centro - Uniquindío',
      interval: 'Cada 10 min'
    },
    {
      line: 'Línea 18',
      name: 'Terminal - Hospital',
      interval: 'Cada 15 min'
    }
  ];

  constructor(private router: Router) {}

  navigateBack() {
    this.router.navigate(['/home']);
  }

  doSearch() {
    this.isSearching = true;
    setTimeout(() => {
      this.isSearching = false;
    }, 1500);
  }

  selectRoute() {
    this.router.navigate(['/seat-selection']);
  }
}
