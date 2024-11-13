import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { DashboardComponent } from './Employee/dashboard/dashboard.component';
import { TripDashboardComponent } from './trip-dashboard/trip-dashboard.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Ensure AppRoutingModule is imported
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    TripDashboardComponent,
    // You can add NewSignupComponent here if it’s not standalone
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxGpAutocompleteModule,
    GooglePlaceModule,
    FormsModule,
    AppRoutingModule, // Use AppRoutingModule for routing
    HttpClientModule,
  ],
  providers: [
    provideHttpClient(withFetch()), // Correctly set up HttpClient provider
  ],
  bootstrap: [DashboardComponent], // Or your main component for bootstrapping
})
export class AppModule {}
