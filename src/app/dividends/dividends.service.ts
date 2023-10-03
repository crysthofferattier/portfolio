import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DividendsService {

  constructor(private http: HttpClient) { }

  list(year: any) {
    if (year === undefined) {
      year = (new Date()).getFullYear();
    }
    
    return this.http.get(environment.apiUrl + year + '/dividends.json', environment.httpHeaders);
  }
}
