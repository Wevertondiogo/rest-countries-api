import { Component, OnInit } from '@angular/core';

import { AppService } from './../app.service';
import { Country } from './../country.model';

@Component({
  selector: 'app-cards-countries',
  templateUrl: './cards-countries.component.html',
  styleUrls: ['./cards-countries.component.scss'],
})
export class CardsCountriesComponent implements OnInit {
  countries: Country[];
  searchCountries: Country[];
  bool: boolean = false;
  constructor(private _service: AppService) {}

  ngOnInit(): void {
    this._service.getCoutries().subscribe((country: Country[]) => {
      this.countries = country;
    });
    this._service.data.subscribe((dataCountry) => {
      if (this.countries != undefined) {
        this.searchCountries = this.countries.filter(
          (country) => country.name === dataCountry
        );
        if (this.searchCountries.length > 0) this.bool = true;
        else {
          this.bool = false;
        }
      }
    });
  }
}
