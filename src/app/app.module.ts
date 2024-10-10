import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { DashboardComponent } from './Employee/dashboard/dashboard.component';
import { TripDashboardComponent } from './trip-dashboard/trip-dashboard.component';
import { FormsModule } from '@angular/forms';
import { NewSignupComponent } from './new-signup/new-signup.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations:[
    DashboardComponent,
    TripDashboardComponent,
    NewSignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    NgxGpAutocompleteModule,
    GooglePlaceModule,
    FormsModule
  ],
  providers: [
    provideHttpClient()
  ],
})
export class AppModule {}
