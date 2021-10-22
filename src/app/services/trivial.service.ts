import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TrivialService {

  constructor(private http: HttpClient) { }

  getTrivial(): Observable<any> {
    return this.http.get('https://opentdb.com/api.php?amount=10');
  }
}
