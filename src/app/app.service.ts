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
  private dataSourceSearch = new BehaviorSubject<string>('');
  private dataSourceRegion = new BehaviorSubject<string>('');
  private mode = new BehaviorSubject<boolean>(false);
  private route = new BehaviorSubject<string>('');
  dataSearch = this.dataSourceSearch.asObservable();
  dataRegion = this.dataSourceRegion.asObservable();
  getMode = this.mode.asObservable();
  getRoute = this.route.asObservable();
  constructor(private _http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this._http.get<Country[]>(environment.baseUrl).pipe(retry(2));
  }
  searchCountries(country: string) {
    return this.dataSourceSearch.next(country);
  }
  setRegion(region: string) {
    return this.dataSourceRegion.next(region);
  }

  getRegion(region: string): Observable<Country[]> {
    const url = `https://restcountries.eu/rest/v2/region/${region}`;
    return this._http.get<Country[]>(url).pipe(retry(2));
  }
  setMode(mode: boolean) {
    return this.mode.next(mode);
  }
  setRoute(route: string) {
    return this.route.next(route);
  }
}
