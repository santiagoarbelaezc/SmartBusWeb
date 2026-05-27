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
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    console.log('Register clicked');
    this.router.navigate(['/register']);
  }

  googleSignIn() {
    console.log('Google Sign-In clicked');
    this.router.navigate(['/home']);
  }
}
