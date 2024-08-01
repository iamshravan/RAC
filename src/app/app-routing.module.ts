import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './Landing/landingpage/landingpage.component';
import { AuthpageComponent } from './Auth/authpage/authpage.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { DashboardComponent } from './Employee/dashboard/dashboard.component';
//import { VdashboardComponent } from './Vendor/vdashboard/vdashboard.component';
import { VendorComponent } from './Vendor/vdashboard/vdashboard.component';
const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'login', component: AuthpageComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'vdashboard', component: VendorComponent},
  { path: '**', redirectTo: '' } // Redirect unknown paths to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
