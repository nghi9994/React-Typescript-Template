import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.home || initialState;

export const selecCycleOverview = createSelector(
  [selectDomain],
  state => state.cycleOverview,
);

export const selecCycleDetail = createSelector(
  [selectDomain],
  state => state.cycleDetail,
);

export const selecCycleList = createSelector(
  [selectDomain],
  state => state.cycleList,
);
