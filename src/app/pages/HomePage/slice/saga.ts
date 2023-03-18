import { takeLatest, call, delay, put, takeEvery } from 'redux-saga/effects';
import { request } from 'utils/requestApi/request';
import { homeActions } from './slice';

function* getCycleOverview(action: any) {
  try {
    const res = yield request.get('/manage-commitment/api/employee/overview');
    if (res) {
      yield put(homeActions.getCycleOverviewSuccess(res));
    }
  } catch (err) {
    console.log('getCycleOverview ~ @err', err);
    yield put(homeActions.getCycleOverviewFail(err));
  }
}

function* getCycleList(action: any) {
  try {
    const res = yield request.get('/manage-commitment/api/cycle');
    if (res) {
      yield put(homeActions.getCycleListSuccess(res));
    }
  } catch (err) {
    console.log('getCycleList ~ @err', err);
    yield put(homeActions.getCycleListFail(err));
  }
}

export function* homeSaga() {
  yield takeLatest(homeActions.getCycleOverview.type, getCycleOverview);
  yield takeLatest(homeActions.getCycleList.type, getCycleList);
}
