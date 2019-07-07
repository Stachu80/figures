import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { FigureActions } from "@app/core/store";
export interface Calculation {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-choose-calculation",
  templateUrl: "./choose-calculation.component.html",
  styleUrls: ["./choose-calculation.component.scss"]
})
export class ChooseCalculationComponent implements OnInit {
  calculations: Calculation[] = [
    { value: "area", viewValue: "Pole Powierzchni" },
    { value: "circumference", viewValue: "Obwód" }
  ];

  constructor(private store: Store<any>) {}

  ngOnInit() {}

  calculationsSelected(event, payload) {
    if (event.isUserInput) {
      console.log(payload);
      this.store.dispatch(new FigureActions.CalculationSelected(payload));
    }
  }
}
