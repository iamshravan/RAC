import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api'; // NestJS API URL

  constructor(private http: HttpClient) {}

  // Example function to call the backend
  getHello(): Observable<string> {
    return this.http.get<string>(this.apiUrl);
  }
}
