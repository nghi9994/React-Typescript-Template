import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.global || initialState;

export const selectShowToast = createSelector(
  [selectDomain],
  state => state.showToast,
);

export const selectShowLoading = createSelector(
  [selectDomain],
  state => state.showLoading,
);

export const selectToken = createSelector([selectDomain], state => state.token);

export const selectUserId = createSelector(
  [selectDomain],
  state => state.userId,
);

export const selectUserInfo = createSelector(
  [selectDomain],
  state => state.userInfo,
);

export const selectCategoryPagination = createSelector(
  [selectDomain],
  state => state.categoryItems,
);

export const selectCurrentCategoryType = createSelector(
  [selectDomain],
  state => state.categoryType,
);

export const selectSubCategoryItems = createSelector(
  [selectDomain],
  state => state.categorySubItems,
);

export const selectCategorySubItemsVoucherPagination = createSelector(
  [selectDomain],
  state => state.voucherItems,
);
