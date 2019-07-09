import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { components } from './components';
import { containers } from './containers';
import { FigureCalculationRoutingModule } from './figure-calculation-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
