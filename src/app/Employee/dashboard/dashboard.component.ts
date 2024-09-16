import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';
//import { NgxGpAutocompleteModule } from '../../../ngx-gp-autocomplete.module';
//import { NgxGpAutocompleteDirective } from '@angular-magic/ngx-gp-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Loader } from '@googlemaps/js-api-loader';
import { type } from 'node:os';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, NgxGpAutocompleteModule],
  providers:[
    {
        provide: Loader,
        useValue: new Loader({
          apiKey: 'AIzaSyD1DzSVz_ZddwghFjteC3P1NUvZrK6xqis',
          libraries: ['places']
        })
      },
  
    ]
  
})
export class DashboardComponent {
  isVehicleModalOpen = false;
  isPackageModalOpen = false;
  isBillTypeModalOpen = false;
  isCostCenterModalOpen = false;
  title ='rou';
  public formattedaddressFrom: string | undefined;
  public formattedaddressTo: string | undefined;
  public formattedaddressDrop: string | undefined;
  public formattedaddressPickup: string | undefined;
  public fromLatitude: number | undefined;
  public fromLongitude: number | undefined;
  public toLatitude: number | undefined;
  public toLongitude: number | undefined;
  options: any = {
    componentRestrctions:
    { country: 'IN' }    
  }

  schedule = {
    initialType: '',
    tripType: '',
    date: '',
    time: '',
    location: '',
    from: '',
    to: '',
    vehicleType: '',
    vehicleImage: '',
    package: '',
    arrivalTime: '',
    carrierName: '',
    departureTime: '',
    costCenter: '',
    status:''
  };
  

  costCenterCode = '';
  selectedBillType = '';

  public AddressChange(place: any, type: string) {
    if (type === 'from') {
      this.formattedaddressFrom = place.formatted_address;
      this.fromLatitude = place.geometry.location.lat();
      this.fromLongitude = place.geometry.location.lng();
      this.schedule.from = place.formatted_address; 
    } else if (type === 'to') {
      this.formattedaddressTo = place.formatted_address;
      this.toLatitude = place.geometry.location.lat();
      this.toLongitude = place.geometry.location.lng();
      this.schedule.to = place.formatted_address;
    }
    else if (type === 'pickupLocation') {
      this.schedule.location = place.formatted_address;
    }
    else if (type === 'dropLocation') {
      this.schedule.location = place.formatted_address;
    }
  }

  toggleBillTypeModal() {
    this.isBillTypeModalOpen = !this.isBillTypeModalOpen;
  }

  closeBillTypeModal() {
    this.isBillTypeModalOpen = false;
  }

  selectBillType(type: string) {
    this.selectedBillType = type;
    if (type === 'Bill to Company') {
      this.openCostCenterModal();
    }
    this.closeBillTypeModal();
  }

  openCostCenterModal() {
    this.isCostCenterModalOpen = true;
  }

  closeCostCenterModal() {
    this.isCostCenterModalOpen = false;
  }

  submitCostCenter() {
    console.log('Cost Center Code:', this.costCenterCode);
    this.closeCostCenterModal();
  }

  openVehicleModal() {
    this.isVehicleModalOpen = true;
  }

  closeVehicleModal() {
    this.isVehicleModalOpen = false;
  }

  selectVehicle(type: string, image: string) {
    this.schedule.vehicleType = type;
    this.schedule.vehicleImage = image;
    this.closeVehicleModal();
  }

  openPackageModal() {
    this.isPackageModalOpen = true;
  }

  closePackageModal() {
    this.isPackageModalOpen = false;
  }

  selectPackage(pkg: string) {
    this.schedule.package = pkg;
    this.closePackageModal();
  }

  constructor(private router: Router) {}

  // onSchedule() {
  //   console.log('Scheduled Trip:', this.schedule);
  
  
  //   // Redirect to the trip dashboard
  //   this.router.navigate(['/trip-dashboard']);
  // }






  // onSchedule() {
  //   console.log('Scheduled Trip:', this.schedule);
  
  //   // Retrieve existing trips from sessionStorage
  //   let storedTrips = sessionStorage.getItem('scheduledTrips');
  //   let trips = storedTrips ? JSON.parse(storedTrips) : [];
  //   console.log('Existing Trips:', trips);
  
  //   // Add the new trip to the list
  //   trips.push(this.schedule);
  //   console.log('Updated Trips:', trips);
  
  //   // Save back to sessionStorage
  //   sessionStorage.setItem('scheduledTrips', JSON.stringify(trips));
  
  //   // Redirect to the trip dashboard
  //   this.router.navigate(['/trip-dashboard']);
  // }
  onSchedule() {
    // Set the status to 'Pending' by default
    this.schedule.status = 'Pending';
    
    console.log('Scheduled Trip:', this.schedule);
    
    // Retrieve existing trips from sessionStorage
    let storedTrips = sessionStorage.getItem('scheduledTrips');
    let trips = storedTrips ? JSON.parse(storedTrips) : [];
    
    // Add the new trip to the list
    trips.push(this.schedule);
    console.log('Updated Trips:', trips);
    
    // Save back to sessionStorage
    sessionStorage.setItem('scheduledTrips', JSON.stringify(trips));
    
    // Redirect to the trip dashboard
    this.router.navigate(['/trip-dashboard']);
  }
  
  
}
