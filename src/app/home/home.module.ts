import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SearchModule } from './../search/search.module';
import { CardsCountriesModule } from './../cards-countries/cards-countries.module';

import { CustomerRoutingModule } from './../customer-routing/customer-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SearchModule,
    CardsCountriesModule,
    CustomerRoutingModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
