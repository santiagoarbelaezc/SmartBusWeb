import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html'
})
export class Profile {
  name = 'Santiago Arbeláez';
  email = 'santiago@correo.com';
  loyaltyLevel = 'Oro';
  totalTrips = 24;
  totalPoints = 4250;

  accountItems = [
    { icon: 'language', bgColor: 'bg-[#0D47A1]', title: 'Idioma', subtitle: 'Español', route: '/profile/language' },
    { icon: 'light_mode', bgColor: 'bg-[#FFB300]', title: 'Apariencia', subtitle: 'Claro', route: '/profile/appearance' },
    { icon: 'credit_card', bgColor: 'bg-[#1B5E20]', title: 'Métodos de pago', subtitle: 'Administra tus tarjetas', route: '/profile/payment-methods' },
    { icon: 'notifications', bgColor: 'bg-[#6A1B9A]', title: 'Notificaciones', subtitle: 'Alertas de viaje', badge: 2, route: '/profile/notifications' },
    { icon: 'security', bgColor: 'bg-[#37474F]', title: 'Seguridad', subtitle: 'Contraseñas y privacidad', route: '/profile/security' }
  ];

  supportItems = [
    { icon: 'account_balance_wallet', bgColor: 'bg-[#E65100]', title: 'Crédito de viaje', subtitle: 'Ver cupo disponible', route: '/profile/travel-credit' },
    { icon: 'help_outline', bgColor: 'bg-[#006064]', title: 'Ayuda y Soporte', subtitle: 'Centro de ayuda', route: '/profile/support' },
    { icon: 'description', bgColor: 'bg-[#37474F]', title: 'Términos y Condiciones', subtitle: 'Políticas de privacidad', route: '/profile/terms' }
  ];

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/welcome']);
  }

  handleItemClick(item: any) {
    if (item.route) {
      this.router.navigate([item.route]);
    }
  }
}
