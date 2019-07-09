import { ActionReducerMap } from '@ngrx/store';
import { DataReducer } from './data.reducer';
import { FigureReducer } from './figure.reducer';

export const reducers: ActionReducerMap<{}> = {
  data: DataReducer,
  selectedFigure: FigureReducer
};
