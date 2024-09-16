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
    { 
      id: '1', // Example ID
      travelDate: '21 JUN', 
      travelTime: '09:00', 
      name: 'Halesh', 
      phone: '8310024842', 
      tripType: 'Airport', 
      vehicleType: 'Sedan', 
      from: 'RGY', 
      to: 'Prasanna theater', 
      status: 'Pending' 
    },
    { 
      id: '2', // Example ID
      travelDate: '16 AUG', 
      travelTime: '14:30', 
      name: 'Prashanth', 
      phone: '7349212889', 
      tripType: 'Disposal', 
      vehicleType: 'SUV', 
      from: 'Sarakki signal', 
      to: 'Golden square jp nagar', 
      status: 'Confirmed' 
    },
    { 
      id: '3', // Example ID
      travelDate: '6 AUG', 
      travelTime: '14:30', 
      name: 'John Cena', 
      phone: '7349212889', 
      tripType: 'Disposal', 
      vehicleType: 'SUV', 
      from: 'Sarakki signal', 
      to: 'Golden square jp nagar', 
      status: 'Declined' 
    }
  ];

  filteredEmployees = [...this.employees];
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
      employee.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      employee.id.includes(this.searchQuery)
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
    this.closeBookingForm();
  }

  // Action Methods
  editEmployee(employee: any) {
    console.log('Edit employee:', employee);
  }

  viewInvoice(employee: any) {
    console.log('View invoice for:', employee);
  }

  generateInvoice(employee: any) {
    console.log('Generate invoice for:', employee);
  }

  assignVehicle(employee: any) {
    console.log('Assign vehicle to:', employee);
  }

  trackStatus(employee: any) {
    console.log('Track status for:', employee);
  }
}






