import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { environment } from './../environments/environment';
import { Country } from './coutry.model';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getCoutries(): Observable<Country[]> {
    return this.http.get<Country[]>(environment.baseUrl).pipe(retry(2));
  }
}
