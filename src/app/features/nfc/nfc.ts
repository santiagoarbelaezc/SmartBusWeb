import { Component, ChangeDetectorRef } from '@angular/core';
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
  isPhoneVisible = false;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  navigateBack() {
    this.router.navigate(['/home']);
  }

  startReading() {
    if (this.status !== 'IDLE') return;
    this.status = 'READING';
    this.isPhoneVisible = true;
    this.cdr.detectChanges();
    
    setTimeout(() => {
      this.status = 'SUCCESS';
      this.availableBalance = '$146.500';
      this.cdr.detectChanges();
      
      setTimeout(() => {
        this.status = 'IDLE';
        this.isPhoneVisible = false;
        this.cdr.detectChanges();
        this.router.navigate(['/home']);
      }, 4000);
    }, 1500);
  }
}
