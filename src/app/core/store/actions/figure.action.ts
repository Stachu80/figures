import { Action } from '@ngrx/store';

export enum ActionTypes {
  FigureSelected = '[Figures] Figure Selected ',
  CalculationSelected = '[Figures] Type Of Calculation Selected'
}

export class FigureSelected implements Action {
  readonly type = ActionTypes.FigureSelected;
  constructor(public payload: any) {}
}

export class CalculationSelected implements Action {
  readonly type = ActionTypes.CalculationSelected;
  constructor(public payload: any) {}
}

export type Actions = FigureSelected | CalculationSelected;
