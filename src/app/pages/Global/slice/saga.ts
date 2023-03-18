import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/requestApi/request';
import { globalActions } from './slice';

function* getToken(action: any) {
  let token = (window as any).eveToken;

  // deb:Token for debug
  // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyOTk3OCIsInVuaXF1ZV9uYW1lIjoiMjk5NzgiLCJpYXQiOiIxNjY4MTQyODk3LjYyMjI1IiwiQWNjb3VudDpJZCI6IjI5OTc4IiwiQWNjb3VudDpVc2VyTmFtZSI6ImFpYS10ZXN0LTAwMSIsIkFjY291bnQ6SGFzaFRva2VuIjoiIiwiQWNjb3VudDpFbXBsb3llZUZ1bGxOYW1lIjoiQUlBIFRlc3RlciAwMDEiLCJBY2NvdW50OkVtcGxveWVlSWQiOiIyOTcxMyIsIkFjY291bnQ6RW1wbG95ZWVMZXZlbCI6IjMiLCJBY2NvdW50OkVtcGxveWVyTmFtZSI6IkFJQSIsIkFjY291bnQ6RW1wbG95ZXJJZCI6IjY3IiwiQWNjb3VudDpFbXBsb3llZURlcGFydG1lbnRJZCI6IjIwOTMiLCJBY2NvdW50OkVtcGxveWVlRGVwYXJ0bWVudE5hbWUiOiJIdW1hbiBSZXNvdXJjZXMiLCJBY2NvdW50OkVtcGxveWVlQnJhbmNoSWQiOiIyMjU0IiwiQWNjb3VudDpFbXBsb3llZUJyYW5jaE5hbWUiOiJIQ01DIiwiQWNjb3VudDpMaW5lTWFuYWdlcklkIjoiIiwiRmVhdHVyZTpJc1F1YXJ0ZXJseVJldmlld0VuYWJsZWQiOiJUcnVlIiwiRmVhdHVyZTpJc0ZsZXhpYmxlQmVuZWZpdEVuYWJsZWQiOiJUcnVlIiwiRmVhdHVyZTpJc05ld3NFbmFibGVkIjoiVHJ1ZSIsIkZlYXR1cmU6SXNSZWNvZ25pdGlvbkVuYWJsZWQiOiJUcnVlIiwiRmVhdHVyZTpJc0hlYWx0aENhcmVQbGFuRW5hYmxlZCI6IkZhbHNlIiwiRmVhdHVyZTpJc05QU0VuYWJsZWQiOiJUcnVlIiwiRmVhdHVyZTpJc09mZmljZTM2NUVuYWJsZWQiOiJGYWxzZSIsIkZlYXR1cmU6SXNNb25rZXlTdXJ2ZXlFbmFibGVkIjoiVHJ1ZSIsIkZlYXR1cmU6SXNESEwiOiJGYWxzZSIsIkZlYXR1cmU6SXNXZWxsbmVzc0VuYWJsZWQiOiJUcnVlIiwiRmVhdHVyZTpJc1JlY29nbml0aW9uU2NoZW1lRW5hYmxlZCI6IkZhbHNlIiwiRmVhdHVyZTpWYWxpZGF0ZVBhc3N3b3JkUmVnZXgiOiIuezYsfSIsIkZlYXR1cmU6VmFsaWRhdGVQYXNzd29yZFRyYW5zS2V5IjoiIiwiRmVhdHVyZTpJc1NvY2lhbFdhbGxFbmFibGVkIjoiRmFsc2UiLCJGZWF0dXJlOklzU2VsZlJlY29nbml0aW9uRW5hYmxlZCI6IkZhbHNlIiwiRmVhdHVyZTpJc090cEVuYWJsZWQiOiJGYWxzZSIsIkZlYXR1cmU6SXNTZW5kUmVjb2duaXRpb25CeVJlY2VpdmVkQ29pbkVuYWJsZWQiOiJGYWxzZSIsIkZlYXR1cmU6SXNDbGFpbUZvcm1FbmFibGVkIjoiRmFsc2UiLCJSb2xlOklkcyI6IjYiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJFbXBsb3llZSIsIm5iZiI6MTY2ODE0Mjg5NywiZXhwIjoxOTgzNTAyODk3LCJpc3MiOiJldmUiLCJhdWQiOiJldmUifQ.l4KmBZFTLkSN9vbzZ3ZSYKX3MFGLmHymcZU6Aw63wh4';

  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNjc3MSIsInVuaXF1ZV9uYW1lIjoiMTY3NzEiLCJpYXQiOiIxNjY4NTkwODIzLjA0ODI2IiwiQWNjb3VudDpJZCI6IjE2NzcxIiwiQWNjb3VudDpVc2VyTmFtZSI6IkhBMTBBMjc0IiwiQWNjb3VudDpIYXNoVG9rZW4iOiIiLCJBY2NvdW50OkVtcGxveWVlRnVsbE5hbWUiOiJOR1VZRU4gVEhJIE5HQU4gSEEiLCJBY2NvdW50OkVtcGxveWVlSWQiOiIxNjYzNyIsIkFjY291bnQ6RW1wbG95ZWVMZXZlbCI6IiIsIkFjY291bnQ6RW1wbG95ZXJOYW1lIjoiQUlBIiwiQWNjb3VudDpFbXBsb3llcklkIjoiNTUiLCJBY2NvdW50OkVtcGxveWVlRGVwYXJ0bWVudElkIjoiMTYyMyIsIkFjY291bnQ6RW1wbG95ZWVEZXBhcnRtZW50TmFtZSI6IkhSIC0gU2VydmljZSBEZWxpdmVyeSAmIFJld2FyZHMiLCJBY2NvdW50OkVtcGxveWVlQnJhbmNoSWQiOiI0NjAiLCJBY2NvdW50OkVtcGxveWVlQnJhbmNoTmFtZSI6IlZpZXRuYW0iLCJBY2NvdW50OkxpbmVNYW5hZ2VySWQiOiIiLCJGZWF0dXJlOklzUXVhcnRlcmx5UmV2aWV3RW5hYmxlZCI6IkZhbHNlIiwiRmVhdHVyZTpJc0ZsZXhpYmxlQmVuZWZpdEVuYWJsZWQiOiJUcnVlIiwiRmVhdHVyZTpJc05ld3NFbmFibGVkIjoiVHJ1ZSIsIkZlYXR1cmU6SXNSZWNvZ25pdGlvbkVuYWJsZWQiOiJUcnVlIiwiRmVhdHVyZTpJc0hlYWx0aENhcmVQbGFuRW5hYmxlZCI6IkZhbHNlIiwiRmVhdHVyZTpJc05QU0VuYWJsZWQiOiJUcnVlIiwiRmVhdHVyZTpJc09mZmljZTM2NUVuYWJsZWQiOiJGYWxzZSIsIkZlYXR1cmU6SXNNb25rZXlTdXJ2ZXlFbmFibGVkIjoiRmFsc2UiLCJGZWF0dXJlOklzREhMIjoiRmFsc2UiLCJGZWF0dXJlOklzV2VsbG5lc3NFbmFibGVkIjoiRmFsc2UiLCJGZWF0dXJlOklzUmVjb2duaXRpb25TY2hlbWVFbmFibGVkIjoiRmFsc2UiLCJGZWF0dXJlOlZhbGlkYXRlUGFzc3dvcmRSZWdleCI6Il4oPz0uKlxcZCkoPz0uKlthLXpBLVpdKSg_PS4qWyFAIyQlXiYqKClfK1xcLT1cXFtcXF17fTsnOlwiXFxcXHwsLjw-XFwvP10pLns4LH0kIiwiRmVhdHVyZTpWYWxpZGF0ZVBhc3N3b3JkVHJhbnNLZXkiOiJBSUFfVkFMSURBVEVfUEFTU1dPUkRfTVVTVF9CRV9TVFJPTkciLCJGZWF0dXJlOklzU29jaWFsV2FsbEVuYWJsZWQiOiJGYWxzZSIsIkZlYXR1cmU6SXNTZWxmUmVjb2duaXRpb25FbmFibGVkIjoiRmFsc2UiLCJGZWF0dXJlOklzT3RwRW5hYmxlZCI6IkZhbHNlIiwiRmVhdHVyZTpJc1NlbmRSZWNvZ25pdGlvbkJ5UmVjZWl2ZWRDb2luRW5hYmxlZCI6IkZhbHNlIiwiRmVhdHVyZTpJc0NsYWltRm9ybUVuYWJsZWQiOiJGYWxzZSIsIlJvbGU6SWRzIjoiMSw2IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIkhSIEFkbWluIiwiRW1wbG95ZWUiXSwibmJmIjoxNjY4NTkwODIzLCJleHAiOjE5ODM5NTA4MjMsImlzcyI6ImV2ZSIsImF1ZCI6ImV2ZSJ9.4Up4RascMEIDWxKgAW0T9nmaursWEziLKVP9rH65Hi4"

  if (token) {
    // deb:set local storage just for debug
    window.localStorage.setItem('token', token);

    console.log(`Get token success: ${token}`);
    localStorage.setItem('token', token);
    yield put(globalActions.getTokenSuccess(token));
  } else {
    console.log('Delay getToken for 3s');
    yield delay(3000);
    yield call(getToken);
  }
}
// userID cua chi Nga: 25162
function* getUserInfo(action: any) {
  try {
    const profile = yield request.get('/manage-user/api/auth/features');
    // const res = yield request.get('/manage-sponsorship/api/employee');

    yield put(
      globalActions.getUserInfoSuccess({
        // userInfo: res,
        isHLBLSponsorship:
          profile && profile?.isHLBLSponsorship === false ? false : true,
      }),
    );
  } catch (err) {
    console.log('@err', err);
  }
}

function* getCategory(action: any) {
  try {
    const res = yield request.get('/manage-sponsorship/api/product/categories');

    yield put(globalActions.getCategorySuccess({ items: res }));
  } catch (err) {
    console.log('@err', err);
  }
}

function* getCategorySubItemsVouchers(action: any) {
  try {
    /* By default, page = 1, pageSize = 12 */
    const res = yield request.get('/manage-sponsorship/api/product', {
      categoryId: action.payload.categoryId,
      page: action.payload.page,
      pageSize: action.payload.pageSize,
      lang: action.payload.lang,
      // sortOrder: action.payload.sortOrder,
    });

    yield put(
      globalActions.getCategorySubItemsVouchersSuccess({
        type: action.payload.categoryType,
        data: res,
      }),
    );
  } catch (err) {
    console.log('@err', err);
  }
}

export function* globalSaga() {
  yield takeLatest(globalActions.getToken.type, getToken);
  yield takeLatest(globalActions.getUserInfo.type, getUserInfo);
  yield takeLatest(globalActions.getCategory.type, getCategory);
  yield takeEvery(
    globalActions.getCategorySubItemsVouchers.type,
    getCategorySubItemsVouchers,
  );
}
