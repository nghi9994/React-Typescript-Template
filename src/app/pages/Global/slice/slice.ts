import { PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

export const initialState: ContainerState = {
  showToast: false,
  showLoading: 0,
  token: '',
};

const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setWorkspaceAvatarCache(state, action: PayloadAction<any>) {},

    getToken(state, action: PayloadAction<any>) {},
    getTokenSuccess(state, action: PayloadAction<any>) {
      state.token = action.payload;
    },

    // START: Get user Id
    getUserId(state, action: PayloadAction<any>) {
      state.userId = action.payload;
    },

    getUserInfo(state, action: PayloadAction<any>) {
      state.userInfo = {
        loading: true,
      };
    },

    getUserInfoSuccess(state, action: PayloadAction<any>) {
      state.userInfo = {
        ...state.userInfo,
        info: action.payload.userInfo,
        isHLBLSponsorship: action.payload.isHLBLSponsorship,
        loading: false,
      };
    },
    // END: Get user Id

    // START: Get category
    getCategory(state, action: PayloadAction<any>) {
      state.categoryItems = {
        ...state.categoryItems,
        loading: true,
      } as any;
    },

    getCategorySuccess(state, action: PayloadAction<any>) {
      state.categoryItems = {
        ...state.categoryItems,
        items: action.payload?.items,
        loading: false,
      } as any;
    },

    getCategoryFail(state, action: PayloadAction<any>) {
      state.categoryItems = {
        ...state.categoryItems,
        error: action.payload?.error,
        loading: false,
      } as any;
    },
    // END: Get category

    getCategorySubItems(state, action: PayloadAction<any>) {
      state.categorySubItems = {
        ...action.payload,
      };
    },

    // START: Get vouchers from each category
    getCategorySubItemsVouchers(state, action: PayloadAction<any>) {
      state.voucherItems = {
        ...state.voucherItems,
        loading: true,
      } as any;
    },

    getCategorySubItemsVouchersSuccess(state, action: PayloadAction<any>) {
      const { type, data } = action.payload;

      state.voucherItems = {
        ...state.voucherItems,
        [type]: data,
        loading: false,
      } as any;
    },

    getCategorySubItemsVouchersFail(state, action: PayloadAction<any>) {
      state.voucherItems = {
        ...state.voucherItems,
        error: action.payload?.error,
        loading: false,
      } as any;
    },
    // END: Get vouchers from each category

    getCurrentCategoryType(state, action: PayloadAction<any>) {
      state.categoryType = {
        current: action.payload,
      };
    },
  },
});

export const {
  actions: globalActions,
  reducer: globalReducer,
  name: globalSliceKey,
} = slice;
