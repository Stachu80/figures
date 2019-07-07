import * as fromFigure from '@app/core/store/reducers/figure.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FigureState } from '../reducers/figure.reducer';

export const getFigureState = createFeatureSelector<FigureState>(
  'selectedFigure'
);

export const getFigure = createSelector(
  getFigureState,
  fromFigure.getSelectedFigure
);

export const getCalculationType = createSelector(
  getFigureState,
  fromFigure.getSelectedCalculationType
);
