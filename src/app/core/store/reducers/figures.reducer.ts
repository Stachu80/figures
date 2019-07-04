import * as fromFigures from '../actions/data.action';
import { Figure } from '../../models/figure.model';

export interface DataState {
  data: Figure[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: DataState = {
  data: [],
  loaded: false,
  loading: false,
};

export function figuresReducer(
  state = initialState,
  action: fromFigures.Actions
): DataState {
  switch (action.type) {
    case fromFigures.ActionTypes.StartLoading: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromFigures.ActionTypes.LoadSuccess: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true
      };
    }

    case fromFigures.ActionTypes.LoadFailure: {
      console.error('Error: ', action.payload)
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}

export const getLoading = (state: DataState) => state.loading;
export const getLoaded = (state: DataState) => state.loaded;
export const getFigure = (state: DataState) => state.data;
