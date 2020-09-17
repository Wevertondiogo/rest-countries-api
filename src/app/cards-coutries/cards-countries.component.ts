import { Component, OnInit } from '@angular/core';

import { AppService } from './../app.service';
import { Country } from './../coutry.model';

@Component({
  selector: 'app-cards-countries',
  templateUrl: './cards-countries.component.html',
  styleUrls: ['./cards-countries.component.scss'],
})
export class CardsCountriesComponent implements OnInit {
  countries: Country[];
  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.service.getCoutries().subscribe((country: Country[]) => {
      this.countries = country;
    });
  }
}
