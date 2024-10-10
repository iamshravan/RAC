import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-signup',
  templateUrl: './new-signup.component.html',
  styleUrls: ['./new-signup.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule], // Keep FormsModule and CommonModule
})
export class NewSignupComponent {
  signupData = {
    name: '',
    email: '',
    address: '',
    gender: '',
    number: '',
    type: '',
    company: ''
  };

  emailDomain: string | null = null;
  emailPlaceholder: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  onTypeChange(type: string) {
    this.signupData.type = type;
    if (type === 'General') {
      this.emailDomain = null;
      this.emailPlaceholder = ''; // Empty placeholder for General User
      this.signupData.email = ''; // Clear email input field
    } else if (type === 'Corporate') {
      this.emailDomain = this.getEmailDomainForCompany(this.signupData.company);
      this.emailPlaceholder = this.emailDomain ? `user${this.emailDomain}` : '';
      this.signupData.email = ''; // Clear email input field
    }
  }

  onCompanyChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.signupData.company = selectElement.value;
    this.emailDomain = this.getEmailDomainForCompany(this.signupData.company);
    this.emailPlaceholder = ''; // Empty placeholder, no prefilled text
    this.signupData.email = ''; // Clear email input field
  }

  getEmailDomainForCompany(company: string): string {
    const domainMap: { [key: string]: string } = {
      'RTX': '@rtx.com',
      'TCS': '@tcs.in',
      'Diligent': '@diligent.com'
    };
    return domainMap[company] || '';
  }

  onSignup() {
    // Handle signup logic here
    this.router.navigate(['/login'], { queryParams: { role: 'employee' } });
  }
}
