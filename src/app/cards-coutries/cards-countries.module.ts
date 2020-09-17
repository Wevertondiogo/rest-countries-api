import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsCountriesComponent } from './cards-countries.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CardsCountriesComponent],
  imports: [CommonModule, MatCardModule],
  exports: [CardsCountriesComponent],
})
export class CardsCountriesModule {}
