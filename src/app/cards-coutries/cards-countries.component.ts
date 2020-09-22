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
  regions: Country[];
  boolSearch: boolean = false;
  boolRegion: boolean = false;
  constructor(private _service: AppService) {}

  ngOnInit(): void {
    this._service.getCoutries().subscribe((country: Country[]) => {
      this.countries = country;
    });

    this.search();
    this.filterRegion();
  }
  search(): void {
    this._service.dataSearch.subscribe((dataCountry) => {
      if (this.countries != undefined) {
        this.searchCountries = this.countries.filter(
          (country) => country.name === dataCountry
        );
        if (this.searchCountries.length > 0) this.boolSearch = true;
        else this.boolSearch = false;
      }
    });
  }

  filterRegion(): void {
    this._service.dataRegion.subscribe((region) => {
      if (region) {
        this._service.getRegion(region).subscribe((region) => {
          this.regions = region;
          this.boolRegion = true;
        });
      } else if (region === undefined) this.boolRegion = false;
    });
  }
}
