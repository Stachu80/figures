import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectionRoutingModule } from './selection-routing.module';
import { SelectionPageComponent } from './selection-page/selection-page.component';

@NgModule({
  declarations: [SelectionPageComponent],
  imports: [
    CommonModule,
    SelectionRoutingModule
  ]
})
export class SelectionModule { }
