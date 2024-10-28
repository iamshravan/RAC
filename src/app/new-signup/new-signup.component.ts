import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
// import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-signup',
  templateUrl: './new-signup.component.html',
  styleUrls: ['./new-signup.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
})
export class NewSignupComponent implements OnInit {
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

  // Domain map for companies
  private readonly domainMap: { [key: string]: string } = {
    'RTX': '@rtx.com',
    'TCS': '@tcs.in',
    'Diligent': '@diligent.com'
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService // Inject the UserService
  ) {}

  ngOnInit(): void {
    // Example: initialize companies or any necessary data here
  }

  onTypeChange(type: string): void {
    this.signupData.type = type;
    if (type === 'General') {
      this.clearEmailFields();
    } else if (type === 'Corporate') {
      this.emailDomain = this.getEmailDomainForCompany(this.signupData.company);
      this.emailPlaceholder = this.emailDomain ? `user${this.emailDomain}` : '';
      this.signupData.email = ''; // Clear email input field
    }
  }

  onCompanyChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.signupData.company = selectElement.value;
    this.emailDomain = this.getEmailDomainForCompany(this.signupData.company);
    this.emailPlaceholder = ''; // Empty placeholder, no prefilled text
    this.signupData.email = ''; // Clear email input field
  }

  getEmailDomainForCompany(company: string): string {
    return this.domainMap[company] || '';
  }

  clearEmailFields(): void {
    this.emailDomain = null;
    this.emailPlaceholder = '';
    this.signupData.email = '';
  }

  onSignup(): void {
    this.userService.signup(this.signupData).subscribe({
      next: (response: any) => {
        console.log('Signup successful:', response);
        this.router.navigate(['/login'], { queryParams: { role: 'employee' } });
      },
      error: (err: any) => console.error('Signup error:', err)
    });
  }
}
