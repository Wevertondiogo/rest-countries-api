import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchText: string;
  mode: boolean;

  constructor(private _service: AppService) {}
  regions: string[];
  ngOnInit(): void {
    this.getRegions();
    this._service.getMode.subscribe((mode) => {
      this.mode = mode;
    });
  }
  getRegions(): void {
    this._service.getCoutries().subscribe((country) => {
      const filterRegions = country
        .map((item) => item.region)
        .filter((item, i, array) => i === array.indexOf(item) && item !== '');
      this.regions = filterRegions.sort();
      setTimeout(() => {
        this.selectOptions();
      }, 0);
    });
  }
  search(e): void {
    if (e.value.length === 1) e.value = e.value.toUpperCase();
    this._service.searchCountries(this.searchText.trim());
  }

  sendRegion(e) {
    this._service.setRegion(e.target.id);
  }
  selectOptions(): void {
    const query = (q) => document.querySelector(q);

    const selected = query('.selected');
    const optionsContainer = query('.options-container');
    const optionsList = document.querySelectorAll('.option');

    optionsList.forEach((option) => {
      option.addEventListener('click', () => {
        selected.innerHTML = option.querySelector('label').innerText;
        optionsContainer.classList.remove('active');
      });
    });
    selected.addEventListener('click', () => {
      optionsContainer.classList.toggle('active');
    });
  }
}
