import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FigureState} from '@app/core/store/reducers/figures.reducer';

import * as fromFigure from '@app/core/store/reducers/figures.reducer';

export const getFigureState = createFeatureSelector<FigureState>('figures');

export const getFigureData = createSelector(
  getFigureState,
  fromFigure.getLoading
);
