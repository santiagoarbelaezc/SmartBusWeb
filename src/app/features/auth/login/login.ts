import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.html'
})
export class Login {
  isPasswordVisible = false;

  constructor(private router: Router) {}

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  login() {
    console.log('Logging in...');
    this.router.navigate(['/home']);
  }

  googleSignIn() {
    console.log('Google login...');
    this.router.navigate(['/home']);
  }
}
