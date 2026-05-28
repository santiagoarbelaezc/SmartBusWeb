import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-layout.html'
})
export class MainLayout {
  currentRoute = '';

  navItems = [
    { route: '/home', icon: 'home', label: 'Inicio' },
    { route: '/search', icon: 'search', label: 'Buscar' },
    { route: '/nfc', icon: 'contactless', label: 'NFC', isFab: true },
    { route: '/tickets', icon: 'confirmation_number', label: 'Tiquetes', badge: 2 },
    { route: '/profile', icon: 'person', label: 'Perfil' }
  ];

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.urlAfterRedirects;
    });
    this.currentRoute = this.router.url;
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    return this.currentRoute.includes(route);
  }
}
