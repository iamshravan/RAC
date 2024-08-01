import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
//import { AppComponent } from './app.component';
import { AppComponent } from './app/app.component';
//import { AppRoutingModule } from './app-routing.module'; // Import your routing module
import { AppRoutingModule } from './app/app-routing.module';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    // Add any providers here if needed
    importProvidersFrom(AppRoutingModule) // Ensure routing is set up
  ],
}).catch(err => console.error(err));
