import { Routes } from '@angular/router';
import { LandingpageComponent } from './Landing/landingpage/landingpage.component';
import { AuthpageComponent } from './Auth/authpage/authpage.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'login', component: AuthpageComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: '**', redirectTo: '' }
];
