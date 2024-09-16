import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trip-dashboard',
  templateUrl: './trip-dashboard.component.html',
  styleUrls: ['./trip-dashboard.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TripDashboardComponent implements OnInit {
  trips: any[] = [];

  //ngOnInit(): void {
    // // Use dummy data for testing
    // this.trips = [
    //   {
    //     date: '20-08-2024',
    //     time: '14:30',
    //     name: 'John Doe',
    //     phone: '123-456-7890',
    //     tripType: 'Pickup',
    //     from: 'Airport',
    //     to: 'Hotel',
    //     status: 'Scheduled'
    //   },
    //   {
    //     date: '21-08-2024',
    //     time: '09:00',
    //     name: 'Jane Smith',
    //     phone: '098-765-4321',
    //     tripType: 'Drop',
    //     from: 'Hotel',
    //     to: 'Airport',
    //     status: 'Completed'
    //   }
    // ];
    ngOnInit(): void {
      const storedTrips = sessionStorage.getItem('scheduledTrips');
  if (storedTrips) {
    this.trips = JSON.parse(storedTrips);
    console.log('Loaded Trips:', this.trips); // Check if trips have status field
  } else {
    console.log('No trips found in sessionStorage');
  }
  }
}
