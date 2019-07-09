import * as fromFigures from '../actions/figure.action';
import { Figure } from '../../models/figure.model';

export interface FigureState {
  figure: Figure;
  calculations: string; 
}

export const initialState: FigureState = {
  figure: null,
  calculations: null
};

export function FigureReducer(
  state = initialState,
  action: fromFigures.Actions
): FigureState {
  switch (action.type) {
    case fromFigures.ActionTypes.FigureSelected: {
      return {
        ...state,
        figure:  action.payload,
      };
    }

    case fromFigures.ActionTypes.CalculationSelected: {
      return {
        ...state,
        calculations: action.payload,
      };
    }
  }

  return state;
}

export const getSelectedFigure = (state: FigureState) => state.figure;
export const getSelectedCalculationType = (state: FigureState) => state.calculations;

