import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculation-form',
  templateUrl: './calculation-form.component.html',
  styleUrls: ['./calculation-form.component.scss']
})
export class CalculationFormComponent implements OnChanges {

  @Input() calculation;
  @Input() figure;
  param: Array<string> = [];
 
  ngOnChanges(): void {
    // console.log(this.calc(4));
    console.log(this.figure)
    console.log(
      this.getParamDictionary(this.figure.area.param, 1, 3, 10)
    )
  }

  calc(...args) {
    this.param = this.figure.area.param;
    args.forEach((item, index) => {
      console.log(this.param[index]);
      window[this.param[index]] = item;
    });

    console.log(this.figure.area.formula);
    return eval(this.figure.area.formula);
  }

  getParamDictionary(params: string[], ...values: number[]) {
    console.log(params, values)
    return params
      .map((param, i) => ({ param, value: values[i] }))
      .reduce(( all, curr ) => ({
        ...all,
        [curr.param]: curr.value
      }), {});
  }
}
