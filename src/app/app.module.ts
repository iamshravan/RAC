import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http'; // Import HttpClient provider
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { DashboardComponent } from './Employee/dashboard/dashboard.component';
import { TripDashboardComponent } from './trip-dashboard/trip-dashboard.component';
import { FormsModule } from '@angular/forms';
//import { NewSignupComponent } from './new-signup/new-signup.component';
import { RouterModule } from '@angular/router'; // Import RouterModule for routing

@NgModule({
  declarations: [
    DashboardComponent,
    TripDashboardComponent,
    //NewSignupComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxGpAutocompleteModule,
    GooglePlaceModule,
    FormsModule,
    RouterModule // Add RouterModule for routing support
  ],
  providers: [
    provideHttpClient() // Provide HttpClient
  ],
  
  //bootstrap: [NewSignupComponent] // Set the main component for bootstrapping
})
export class AppModule {}
