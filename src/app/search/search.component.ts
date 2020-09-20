import { Component, OnInit } from '@angular/core';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { AppService } from './../app.service';
import { Country } from './../country.model';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  selectedCity: any;
  searchText: string;

  constructor(private _service: AppService) {}
  cities = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' },
  ];

  ngOnInit(): void {}
  search(e): void {
    if (e.value.length === 1) {
      e.value = e.value.toUpperCase();
    }
    this._service.searchCountries(this.searchText.trim());
  }
}
