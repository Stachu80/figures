import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { MathUtils } from "@app/utils/math-utils";

@Component({
  selector: "app-calculation-form",
  templateUrl: "./calculation-form.component.html",
  styleUrls: ["./calculation-form.component.scss"]
})
export class CalculationFormComponent implements OnInit OnChanges {
  @Input() calculation;
  @Input() figure;
  
  constructor() {}
    ngOnChanges(): void {
      console.log(this.calc(4));
    }

  ngOnInit() {
  }

  calc(...args) {
    const param: Array<string> = this.figure.area.param;
    args.forEach((item, index) => {
      console.log(param[index]);
      window[param[index]] = item;
    });

    console.log(this.figure.area.formula)
    return eval(this.figure.area.formula);
  }
}
