import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', loadComponent: () => import('./features/welcome/welcome').then(m => m.Welcome) },
  { path: 'home', loadComponent: () => import('./features/home/home').then(m => m.Home) },
  { path: 'search', loadComponent: () => import('./features/search/search').then(m => m.Search) },
  { path: 'seat-selection', loadComponent: () => import('./features/seat-selection/seat-selection').then(m => m.SeatSelection) },
  { path: '**', redirectTo: 'welcome' }
];
