import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FigureActions } from '@app/core/store';

export interface Calculation {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-choose-calculation',
  templateUrl: './choose-calculation.component.html',
  styleUrls: ['./choose-calculation.component.scss']
})

export class ChooseCalculationComponent {
  calculations: Calculation[] = [
    {value: 'area', viewValue: 'Pole Powierzchni'},
    {value: 'circumference', viewValue: 'Obwód'}
  ];

  constructor(private store: Store<any>) {
  }

  calculationsSelected(event, payload) {
    if (event.isUserInput) {
      this.store.dispatch(new FigureActions.CalculationSelected(payload));
    }
  }
}
