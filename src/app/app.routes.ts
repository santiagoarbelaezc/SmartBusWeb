import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', loadComponent: () => import('./features/welcome/welcome').then(m => m.Welcome) },
  { path: 'login', loadComponent: () => import('./features/auth/login/login').then(m => m.Login) },
  { path: 'register', loadComponent: () => import('./features/auth/register/register').then(m => m.Register) },
  { path: 'home', loadComponent: () => import('./features/home/home').then(m => m.Home) },
  { path: 'search', loadComponent: () => import('./features/search/search').then(m => m.Search) },
  { path: 'seat-selection', loadComponent: () => import('./features/seat-selection/seat-selection').then(m => m.SeatSelection) },
  { path: 'nfc', loadComponent: () => import('./features/nfc/nfc').then(m => m.Nfc) },
  { path: 'tickets', loadComponent: () => import('./features/tickets/tickets').then(m => m.Tickets) },
  { path: 'points', loadComponent: () => import('./features/points/points').then(m => m.Points) },
  { path: 'profile', loadComponent: () => import('./features/profile/profile').then(m => m.Profile) },
  { path: '**', redirectTo: 'welcome' }
];
