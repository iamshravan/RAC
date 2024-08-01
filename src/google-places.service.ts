import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GooglePlacesService {
  private apiKey = 'AIzaSyD1DzSVz_ZddwghFjteC3P1NUvZrK6xqis';
  constructor(private http: HttpClient) {}

  getPlaceDetails(placeId: string): Observable<any> {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyD1DzSVz_ZddwghFjteC3P1NUvZrK6xqis`;
    return this.http.get(apiUrl);
  }
}
