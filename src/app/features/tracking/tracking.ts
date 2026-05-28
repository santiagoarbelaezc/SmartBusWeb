import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tracking.html'
})
export class Tracking {
  tripStatus = 'EN RUTA';
  progress = 0; 
  timeLeft = '3h 15m';
  distanceLeft = '180 km';
  isSimulating = false;
  isFinished = false;

  simulateProgress() {
    if (this.isSimulating || this.isFinished) return;
    this.isSimulating = true;
    
    let currentStep = 0;
    const steps = 100;
    const delay = 40; 
    
    const interval = setInterval(() => {
      this.progress += 1;
      
      if (this.progress % 5 === 0) {
        const totalMinutesLeft = Math.floor((100 - this.progress) * 1.95); // 3h15m = 195 mins. 100% = 195 mins.
        const hoursLeft = Math.floor(totalMinutesLeft / 60);
        const minsLeft = totalMinutesLeft % 60;
        this.timeLeft = hoursLeft > 0 ? `${hoursLeft}h ${minsLeft}m` : `${minsLeft}m`;
        this.distanceLeft = `${Math.floor((100 - this.progress) * 1.8)} km`;
      }
      
      if (this.progress >= 100) {
        clearInterval(interval);
        this.progress = 100;
        this.isSimulating = false;
        this.isFinished = true;
        this.tripStatus = 'LLEGÓ A DESTINO';
        this.timeLeft = '0m';
        this.distanceLeft = '0 km';
      }
    }, delay);
  }
}
