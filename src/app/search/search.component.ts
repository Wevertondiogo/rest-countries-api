import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  selectedCity: any;
  searchText: string;

  constructor(private _service: AppService) {}
  regions: string[];
  ngOnInit(): void {
    this._service.getCoutries().subscribe((country) => {
      const filterRegions = country
        .map((item) => item.region)
        .filter((item, i, array) => i === array.indexOf(item) && item !== '');
      this.regions = filterRegions.sort();
    });
  }
  search(e): void {
    if (e.value.length === 1) e.value = e.value.toUpperCase();
    this._service.searchCountries(this.searchText.trim());
  }

  sendRegion(e: string) {
    this._service.setRegion(e);
  }
}
