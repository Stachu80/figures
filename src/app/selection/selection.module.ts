import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SelectionRoutingModule } from "./selection-routing.module";
import { SelectionPageComponent } from "./selection-page/selection-page.component";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [SelectionPageComponent],
  imports: [
    CommonModule,
    SelectionRoutingModule,
    MatSelectModule,
  ]
})
export class SelectionModule {}
