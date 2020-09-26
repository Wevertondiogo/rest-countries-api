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
  languages: any[] = [];
  borders: any;
  constructor(
    private route: ActivatedRoute,
    private _service: AppService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getByid();
    this.setInfo();
  }
  back(): void {
    this.router.navigate(['/home']);
  }
  getByid(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));
  }
  setInfo(): void {
    this._service.getCoutries().subscribe((country) => {
      this.countryInfos = country.filter((country) => country.name === this.id);
      this.currencies = this.countryInfos.map(
        (country, i) => country.currencies[i].name
      );
      this.countryInfos.map((country) => {
        const language: any = country.languages;
        let filterLanguages = [];
        for (let i in language) {
          filterLanguages.push(language[i].name);
        }
        this.languages.push(filterLanguages.join(', '));
      });
      const filterBorders = this.countryInfos.map((country) => country.borders);

      for (let i in filterBorders) {
        this.borders = filterBorders[i];
      }
    });
  }
}
