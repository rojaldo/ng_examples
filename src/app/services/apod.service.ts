import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  API_KEY = 'tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6';

  constructor(private http: HttpClient) { }

  getApod(date?: string): Observable<any>{

    if (date !== undefined) {
      return this.http.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${this.API_KEY}`);
    } else {
      return this.http.get(`https://api.nasa.gov/planetary/apod?api_key=${this.API_KEY}`);
    }
  }
}
