import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nfc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nfc.html'
})
export class Nfc {
  status: 'IDLE' | 'READING' | 'SUCCESS' | 'ERROR' = 'IDLE';
  availableBalance = '$150.000';

  constructor(private router: Router) {}

  navigateBack() {
    this.router.navigate(['/home']);
  }

  startReading() {
    this.status = 'READING';
    setTimeout(() => {
      this.status = 'SUCCESS';
      setTimeout(() => {
        this.status = 'IDLE';
      }, 3000);
    }, 2000);
  }
}
