import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  list(year: any) {
    if (year === undefined) {
      year = (new Date()).getFullYear();
    }

    const url = environment.apiUrl + year + '/transactions.json';
    
    return this.http.get(url, environment.httpHeaders);
  }
}
