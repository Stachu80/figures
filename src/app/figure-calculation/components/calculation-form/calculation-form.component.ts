import { Component, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MathUtils } from '@app/utils/math-utils';

@Component({
  selector: 'app-calculation-form',
  templateUrl: './calculation-form.component.html',
  styleUrls: ['./calculation-form.component.scss']
})
export class CalculationFormComponent implements OnChanges {
  @Input() calculation: string;
  @Input() figure: string;

  param: Array<string> = [];
  orderForm: FormGroup;
  items: FormArray;
  formula: string;
  score: number;
  calc: string;

  constructor(private formBuilder: FormBuilder) {}

  createItem(param: string): FormGroup {
    return this.formBuilder.group({
      name: param[0],
      description: param[1],
      value: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$')
        ]
      ]
    });
  }

  ngOnChanges(): void {
    this.score = 0;
    this.calc =
      this.calculation === 'circumference' ? 'Obwód' : 'Pole powierzchni';
    this.buildForm();
  }

  buildForm() {
    this.orderForm = this.formBuilder.group({
      items: this.formBuilder.array([])
    });
    this.formula = this.figure[this.calculation].formula;
    this.figure[this.calculation].param.forEach(param => {
      this.items = this.orderForm.get('items') as FormArray;
      this.items.push(this.createItem(param));
    });
  }

  reset(): void {
    this.orderForm.reset();
    this.buildForm();
    this.score = null;
  }

  calculate(): void {
    let formulaExp = this.formula;
    const value = this.orderForm.value.items.map(item => +item.value);
    const obj = this.getParamDictionary(
      this.figure[this.calculation].param,
      ...value
    );

    Object.keys(obj).forEach(key => {
      const reg = new RegExp(key, 'g');
      formulaExp = this.formula.replace(reg, obj[key]);
    });

    this.score = MathUtils.stringMathOperation(formulaExp);
  }

  getParamDictionary(params: string[], ...values: number[]): object {
    return params
      .map((param, i) => ({ param, value: values[i] }))
      .reduce(
        (all, curr) => ({
          ...all,
          [curr.param[0]]: curr.value
        }),
        {}
      );
  }
}
