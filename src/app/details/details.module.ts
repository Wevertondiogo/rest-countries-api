import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsComponent } from './details.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [DetailsComponent],
})
export class DetailsModule {}
