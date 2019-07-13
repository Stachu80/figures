import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { components } from './components';
import { containers } from './containers';
import { FigureCalculationRoutingModule } from './figure-calculation-routing.module';


@NgModule({
  declarations: [...containers, ...components],
  imports: [
    CommonModule,
    FormsModule,
    FigureCalculationRoutingModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})

export class FigureCalculationModule {}
