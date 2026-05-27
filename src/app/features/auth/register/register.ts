import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './register.html'
})
export class Register {
  isPasswordVisible = false;
  docType = 'C.C.';
  showDocTypeMenu = false;
  termsAccepted = false;

  constructor(private router: Router) {}

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleDocMenu() {
    this.showDocTypeMenu = !this.showDocTypeMenu;
  }

  selectDocType(type: string) {
    this.docType = type;
    this.showDocTypeMenu = false;
  }

  register() {
    console.log('Registering...');
    this.router.navigate(['/home']);
  }
}
