import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { CommonModule } from '@angular/common'; // Import CommonModule for standalone component

@Component({
  selector: 'app-authpage',
  standalone: true,
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule to imports
  templateUrl: './authpage.component.html',
  styleUrls: ['./authpage.component.css']
})
export class AuthpageComponent implements OnInit {
  username: string = '';
  password: string = '';
  role: string = '';
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {} // Inject HttpClient

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.role = params['role'];
      console.log('Role from query params:', this.role); // Debugging line
    });
  }

  onSubmit() {
    console.log('Submit clicked with:', this.username, this.password, this.role); // Debugging line

    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter both username and password.';
      return;
    }

    // Make a POST request to the backend API for login
    const loginData = {
      username: this.username,
      password: this.password,
      role: this.role // Send role if required by the backend
    };

    this.http.post('http://localhost:3000/login', loginData).subscribe(
      (response: any) => {
        console.log('Login successful:', response);

        // Redirect based on the role
        if (this.role === 'employee') {
          this.router.navigate(['/dashboard']);
        } else if (this.role === 'corporate') {
          this.router.navigate(['/vdashboard']);
        } else {
          this.router.navigate(['/landing']);
        }
      },
      (error) => {
        console.error('Login failed:', error);
        this.errorMessage = error.error.message || 'Invalid username or password.';
      }
    );
  }

  onForgotPassword() {
    console.log('Navigating to forgot password'); // Debugging line
    this.router.navigate(['/forgot-password']);
  }
}
