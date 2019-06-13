import * as fromFigures from '../actions/figures.action';
import {Figure} from '../../models/figure.model';

export interface FigureState {
  data: Figure[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: FigureState = {
  data: [],
  loaded: false,
  loading: false,
};

export function figuresReducer(
  state = initialState,
  action: fromFigures.Actions
): FigureState {
  switch (action.type) {
    case fromFigures.ActionTypes.LoadSuccess: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromFigures.ActionTypes.LoadSuccess: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case fromFigures.ActionTypes.LoadFailure: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}

export const getPizzasLoading = (state: FigureState) => state.loading;
export const getPizzasLoaded = (state: FigureState) => state.loaded;
export const getPizzas = (state: FigureState) => state.data;
