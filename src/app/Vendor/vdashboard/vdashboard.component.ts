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
      id: '1',
      travelDate: '21 JUN',
      travelTime: '09:00',
      name: 'Halesh',
      phone: '8310024842',
      tripType: 'Airport',
      vehicleType: 'Sedan',
      from: 'RGY',
      to: 'Prasanna theater',
      status: 'Pending',
      isEditMode: false,
      vehicleNumber: '',
      driverName: ''
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
      status: 'Confirmed',
      isEditMode: false,
      vehicleNumber: '',
      driverName: ''
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
      status: 'Declined',
      isEditMode: false,
      vehicleNumber: '',
      driverName: ''
    }
  ];

  filteredEmployees = [...this.employees];
  searchQuery: string = '';

  vehicleNumbers = ['KA-01-H-1234', 'KA-02-M-5678', 'KA-03-T-9101', 'KA-04-A-1121'];
  drivers = ['Halesh', 'Prashanth', 'John Cena'];

  filteredVehicleNumbers: string[] = [];
  filteredDrivers: string[] = [];

  vehicleNumber: string = '';
  driverName: string = '';

  isModalOpen: boolean = false;
  currentEmployee: any = null;
  showVehicleSuggestions: boolean = false;
  showDriverSuggestions: boolean = false;

  filterEmployees() {
    this.filteredEmployees = this.employees.filter(employee =>
      employee.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      employee.id.includes(this.searchQuery)
    );
  }

  toggleEditMode(employee: any) {
    employee.isEditMode = !employee.isEditMode;
    if (employee.isEditMode) {
      alert('You can now edit the fields!');
    } else {
      alert('Edit mode has been disabled.');
    }
  }

  saveEmployee(employee: any) {
    console.log('Updated Employee:', employee);
    alert('Employee details updated successfully!');
    employee.isEditMode = false;
  }

  handleStatusChange(employee: any) {
    alert(`Status changed to: ${employee.status}`);
  }

  editEmployee(employee: any) {
    this.toggleEditMode(employee);
  }

  cancelEdit(employee: any) {
    this.toggleEditMode(employee);
  }

  openAssignVehicleModal(employee: any) {
    this.isModalOpen = true;
    this.currentEmployee = employee;
    this.filteredVehicleNumbers = [...this.vehicleNumbers];
    this.filteredDrivers = [...this.drivers];
  }

  closeModal() {
    this.isModalOpen = false;
    this.vehicleNumber = '';
    this.driverName = '';
    this.currentEmployee = null;
    this.showVehicleSuggestions = false;
    this.showDriverSuggestions = false;
  }

  assignVehicle() {
    if (this.vehicleNumber && this.driverName) {
      this.currentEmployee.vehicleNumber = this.vehicleNumber;
      this.currentEmployee.driverName = this.driverName;
      alert('Vehicle and Driver assigned successfully!');
      this.closeModal();
    } else {
      alert('Please fill in all fields before deploying.');
    }
  }

  onVehicleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredVehicleNumbers = this.vehicleNumbers.filter(vehicleNumber =>
      vehicleNumber.toLowerCase().includes(query)
    );
    this.showVehicleSuggestions = true;
  }

  onDriverInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredDrivers = this.drivers.filter(driver =>
      driver.toLowerCase().includes(query)
    );
    this.showDriverSuggestions = true;
  }

  selectVehicle(vehicleNumber: string) {
    this.vehicleNumber = vehicleNumber;
    this.showVehicleSuggestions = false; // Close suggestions on selection
  }

  selectDriver(driver: string) {
    this.driverName = driver;
    this.showDriverSuggestions = false; // Close suggestions on selection
  }

  // Close suggestions if the input loses focus
  onVehicleBlur() {
    setTimeout(() => {
      if (!this.filteredVehicleNumbers.length) {
        this.showVehicleSuggestions = false;
      }
    }, 200);
  }

  onDriverBlur() {
    setTimeout(() => {
      if (!this.filteredDrivers.length) {
        this.showDriverSuggestions = false;
      }
    }, 200);
  }
}
