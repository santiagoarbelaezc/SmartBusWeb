import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Seat {
  id: string;
  row: number;
  col: string;
  label: string;
  status: 'AVAILABLE' | 'SELECTED' | 'OCCUPIED';
}

@Component({
  selector: 'app-seat-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seat-selection.html'
})
export class SeatSelection {
  origin = 'Armenia';
  destination = 'Medellín';
  departureTime = '06:00 AM';
  company = 'Bolivariano';
  
  selectedSeatLabel: string | null = null;
  selectedSeatId: string | null = null;

  rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  seats: Seat[] = [];

  constructor(private router: Router) {
    this.generateSeats();
  }

  generateSeats() {
    this.rows.forEach(row => {
      ['A', 'B', 'C', 'D'].forEach(col => {
        // Mock some occupied seats
        const isOccupied = (row === 2 && col === 'A') || (row === 3 && col === 'C') || (row === 8 && col === 'D');
        this.seats.push({
          id: `${row}${col}`,
          row,
          col,
          label: `${col}${row}`, // e.g. A1, B1
          status: isOccupied ? 'OCCUPIED' : 'AVAILABLE'
        });
      });
    });
  }

  getSeatsForRow(row: number) {
    return {
      a: this.seats.find(s => s.row === row && s.col === 'A'),
      b: this.seats.find(s => s.row === row && s.col === 'B'),
      c: this.seats.find(s => s.row === row && s.col === 'C'),
      d: this.seats.find(s => s.row === row && s.col === 'D')
    };
  }

  get availableCount() {
    return this.seats.filter(s => s.status === 'AVAILABLE').length;
  }

  selectSeat(seatId: string) {
    const seatIndex = this.seats.findIndex(s => s.id === seatId);
    if (seatIndex === -1) return;
    
    const seat = this.seats[seatIndex];
    if (seat.status === 'OCCUPIED') return;

    // Deselect previous
    if (this.selectedSeatId) {
      const prevIndex = this.seats.findIndex(s => s.id === this.selectedSeatId);
      if (prevIndex !== -1) {
        this.seats[prevIndex].status = 'AVAILABLE';
      }
    }

    // Toggle current
    if (this.selectedSeatId === seatId) {
      this.selectedSeatId = null;
      this.selectedSeatLabel = null;
      seat.status = 'AVAILABLE';
    } else {
      seat.status = 'SELECTED';
      this.selectedSeatId = seat.id;
      this.selectedSeatLabel = seat.label;
    }
  }

  navigateBack() {
    this.router.navigate(['/search']);
  }

  continueToPayment() {
    if (this.selectedSeatId) {
      this.router.navigate(['/payment']);
    }
  }
}
