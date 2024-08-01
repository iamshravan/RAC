import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']  // Ensure this matches the filename
})
export class LandingpageComponent {
  constructor(private router: Router) {}

  navigateToLogin(role: string): void {
    this.router.navigate(['/login'], { queryParams: { role } });
  }
}
