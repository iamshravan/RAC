import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { GooglePlaceAut } from 'ngx-google-places-autocomplete';
//import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
//import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import '@angular/compiler';
// Import your standalone component
import { AppComponent } from './app.component';
//import { HttpClient } from '@angular/common/http';
//import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';
import { DashboardComponent } from './Employee/dashboard/dashboard.component';




@NgModule({
  declarations: [],
  imports: [BrowserModule, NgxGpAutocompleteModule ],
  providers: [
    
  ],
  // Remove the bootstrap array
  // bootstrap: [AppComponent] // This line is removed
})
export class AppModule {}
