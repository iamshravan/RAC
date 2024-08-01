import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-authpage',
  standalone: true,
  imports: [FormsModule], // Add FormsModule to imports
  templateUrl: './authpage.component.html',
  styleUrls: ['./authpage.component.css']
})
export class AuthpageComponent implements OnInit {
  username: string = '';
  password: string = '';
  role: string = '';
  errorMessage: string = '';

  validCredentials: Record<'vendor' | 'employee' | 'corporate', { username: string; password: string }> = {
    vendor: { username: 'vendor', password: 'vendor123' },
    employee: { username: 'employee', password: 'employee123' },
    corporate: { username: 'corporate', password: 'corporate123' }
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.role = params['role'];
      console.log('Role from query params:', this.role); // Debugging line
    });
  }

  onSubmit() {
    console.log('Submit clicked with:', this.username, this.password, this.role); // Debugging line
    if (this.validateCredentials(this.username, this.password, this.role)) {
      console.log('Login successful');
      if (this.role === 'employee') {
        this.router.navigate(['/dashboard']);
      } else if (this.role === 'corporate') {
        this.router.navigate(['/vdashboard']);
      } else {
        this.router.navigate(['/landing']); // Redirect other roles to a landing page or another route
      }
    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  }

  validateCredentials(username: string, password: string, role: string): boolean {
    console.log('Validating credentials for:', role, username, password); // Debugging line
    const credentials = this.validCredentials[role as 'vendor' | 'employee' | 'corporate'];
    return credentials ? username === credentials.username && password === credentials.password : false;
  }

  onForgotPassword() {
    console.log('Navigating to forgot password'); // Debugging line
    this.router.navigate(['/forgot-password']);
  }
}
