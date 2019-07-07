import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DataState } from '@app/core/store/reducers/data.reducer';
import * as fromData from '@app/core/store/reducers/data.reducer';

export const getDataState = createFeatureSelector<DataState>('data');

export const getData = createSelector(
  getDataState,
  fromData.getAllFigures
);

export const getLoadingStatus = createSelector(
  getDataState,
  fromData.getLoaded
);
