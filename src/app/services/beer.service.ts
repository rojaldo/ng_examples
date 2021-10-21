import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BeerService {

  constructor(private http: HttpClient) { }

  getBeers(): Observable<any> {
    return this.http.get('https://api.punkapi.com/v2/beers');
  }
}
