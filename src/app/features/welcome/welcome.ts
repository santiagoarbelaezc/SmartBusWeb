import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UiButton } from '../../shared/components/ui-button/ui-button';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, UiButton],
  templateUrl: './welcome.html'
})
export class Welcome {
  constructor(private router: Router) {}

  navigateToLogin() {
    console.log('Login clicked');
    // Implement auth later, just go to home for now to test flow
    this.router.navigate(['/home']);
  }

  navigateToRegister() {
    console.log('Register clicked');
    this.router.navigate(['/home']);
  }

  googleSignIn() {
    console.log('Google Sign-In clicked');
    this.router.navigate(['/home']);
  }
}
