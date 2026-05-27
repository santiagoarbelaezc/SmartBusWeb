import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-points',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './points.html'
})
export class Points {
  totalPoints = 4250;
  progress = 0.75;
  pointsToNextLevel = 1250;

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
