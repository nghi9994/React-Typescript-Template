import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

export const initialState: ContainerState = {};

const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    // Get cycle total amount
    getCycleOverview(state, action: PayloadAction<any>) {
      state.cycleOverview = {
        loading: true,
      };
    },
    getCycleOverviewSuccess(state, action: PayloadAction<any>) {
      state.cycleOverview = {
        ...state.cycleOverview,
        data: action.payload,
        loading: false,
      };
    },
    getCycleOverviewFail(state, action: PayloadAction<any>) {
      state.cycleOverview = {
        error: action.payload,
        loading: false,
      };
    },

    // Get cycle list
    getCycleList(state, action: PayloadAction<any>) {
      state.cycleList = {
        loading: true,
      };
    },
    getCycleListSuccess(state, action: PayloadAction<any>) {
      state.cycleList = {
        ...state.cycleList,
        data: action.payload,
        loading: false,
      };
    },
    getCycleListFail(state, action: PayloadAction<any>) {
      state.cycleList = {
        error: action.payload,
        loading: false,
      };
    },

    // Get cycle detail
    getCycleDetail(state, action: PayloadAction<any>) {
      state.cycleDetail = {
        loading: true,
      };
    },
    getCycleDetailSuccess(state, action: PayloadAction<any>) {
      state.cycleDetail = {
        ...state.cycleDetail,
        data: action.payload,
        loading: false,
      };
    },
    getCycleDetailFail(state, action: PayloadAction<any>) {
      state.cycleDetail = {
        error: action.payload,
        loading: false,
      };
    },
  },
});

export const {
  actions: homeActions,
  reducer: homeReducer,
  name: homeSliceKey,
} = slice;
