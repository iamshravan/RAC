import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cdashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cdashboard.component.html',
  styleUrls: ['./cdashboard.component.css']
})
export class CdashboardComponent {
  employees = [
    { 
      id: '1',
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
      id: '2',
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
      id: '3',
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
  searchQuery: string = '';

  // Filters employees based on search query
  filterEmployees() {
    this.filteredEmployees = this.employees.filter(employee =>
      employee.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      employee.id.includes(this.searchQuery)
    );
  }

  // Handle status change with an alert
  handleStatusChange(employee: any) {
    alert(`Status changed to: ${employee.status}`);
  }
}
