import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { DashboardComponent } from './Employee/dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    NgxGpAutocompleteModule,
    GooglePlaceModule,
  ],
  providers: [
    provideHttpClient()
  ],
})
export class AppModule {}
