import * as fromData from '../actions/data.action';
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

export function DataReducer(
  state = initialState,
  action: fromData.Actions
): DataState {
  switch (action.type) {
    case fromData.ActionTypes.StartLoading: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromData.ActionTypes.LoadSuccess: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true
      };
    }

    case fromData.ActionTypes.LoadFailure: {
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
export const getAllFigures = (state: DataState) => state.data;
