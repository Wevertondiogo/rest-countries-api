import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { retry } from 'rxjs/operators';

import { environment } from './../environments/environment';
import { Country } from './country.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private dataSource = new BehaviorSubject<string>('');
  data = this.dataSource.asObservable();
  constructor(private _http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getCoutries(): Observable<Country[]> {
    return this._http.get<Country[]>(environment.baseUrl).pipe(retry(2));
  }
  searchCountries(country: string) {
    return this.dataSource.next(country);
  }

}
