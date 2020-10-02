import { Observable } from 'rxjs';
import { Country } from './../country.model';
import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: string;
  countryInfos: Country[];
  currencies: Country[];
  languages: any;
  borders: any;
  mode: boolean;
  constructor(
    private route: ActivatedRoute,
    private _service: AppService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getByid();
    this.setInfo();
    this._service.getMode.subscribe((mode) => (this.mode = mode));
  }
  back(): void {
    this.router.navigate(['/home']);
  }
  getByid(): void {
    this.route.params.subscribe((params) => {
      this._service.setRoute(params['id']);
    });
  }
  setInfo(): void {
    this._service.getCountries().subscribe((country) => {
      this._service.getRoute.subscribe((route) => {
        this.id = route;
        this.countryInfos = country.filter(
          (country) => country.name === this.id
        );
        const filterBorders = this.countryInfos.map(
          (country) => country.borders
        );

        for (let i in filterBorders) {
          this.borders = filterBorders[i];
        }
        this.currencies = this.countryInfos.map(
          (country, i) => country.currencies[i].name
        );
        this.countryInfos.map((country) => {
          const language: any = country.languages;
          let filterLanguages = [];
          for (let i in language) {
            filterLanguages.push(language[i].name);
          }

          this.languages = filterLanguages.join(', ');
        });
      });
    });
  }
  sendRoute(e): void {
    const value = e.target.innerText;
    let id;
    this._service.getCountries().subscribe((data) => {
      data.filter((country) =>
        country.cioc === value ? (id = country.name) : false
      );
      if (id) {
        this.router.navigate([`/details/${id}`]);
      } else {
        alert('Sorry but that country not is available');
      }
    });
  }
}
