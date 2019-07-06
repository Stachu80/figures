import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DataState } from "@app/core/store/reducers/figures.reducer";
import * as fromFigure from "@app/core/store/reducers/figures.reducer";

export const getFigureState = createFeatureSelector<DataState>("figures");

export const getFigureData = createSelector(
  getFigureState,
  fromFigure.getFigure
);

export const getLoadingStatus = createSelector(
  getFigureState,
  fromFigure.getLoaded
);
