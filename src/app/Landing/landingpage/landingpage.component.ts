import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'] // Ensure this matches the filename
})
export class LandingpageComponent {
  constructor(private router: Router) {}

  navigateToLogin(role: string): void {
    if (role === 'corporate') {
      // Redirect corporate role to vdashboard
      this.router.navigate(['/vdashboard']);
    } else {
      // Redirect other roles to signup page with query parameters
      this.router.navigate(['/signup'], { queryParams: { role } });
    }
  }
}
