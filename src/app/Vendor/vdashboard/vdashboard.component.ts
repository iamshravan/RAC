import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vdashboard.component.html',
  styleUrls: ['./vdashboard.component.css']
})
export class VendorComponent {
  employees = [
    { id: 'SDE1', name: 'Halesh', position: 'Developer' },
    { id: 'SDE2', name: 'Prashanth', position: 'Designer' }
  ];

  filteredEmployees = [...this.employees]; // Initialize with all employees
  selectedEmployee: any = null;
  booking = {
    pickupLocation: '',
    dropLocation: '',
    date: '',
    time: ''
  };
  searchQuery: string = '';

  filterEmployees() {
    this.filteredEmployees = this.employees.filter(employee =>
      employee.id.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      employee.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  openBookingForm(employee: any) {
    this.selectedEmployee = employee;
  }

  closeBookingForm() {
    this.selectedEmployee = null;
  }

  onBookCab() {
    console.log('Booking details:', this.booking);
    // Add booking logic here
    this.closeBookingForm();
  }
}
