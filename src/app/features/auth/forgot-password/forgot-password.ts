import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './forgot-password.html'
})
export class ForgotPassword {
  isEmailSent = false;
  isLoading = false;

  constructor(public location: Location) {}

  sendRecoveryEmail() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isEmailSent = true;
    }, 1500);
  }

  goBack() {
    this.location.back();
  }
}
