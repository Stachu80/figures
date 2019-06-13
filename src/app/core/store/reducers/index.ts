import {ActionReducerMap} from '@ngrx/store';
import {figuresReducer} from './figures.reducer';


export const reducers: ActionReducerMap<{}> = {
  figures: figuresReducer,
};
