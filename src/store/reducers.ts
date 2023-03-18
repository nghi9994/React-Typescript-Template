/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import { InjectedReducersType } from 'utils/types/injector-typings';
import browserHistory from 'utils/history';
import _ from 'lodash';
import { globalReducer, globalSliceKey } from 'app/pages/Global/slice/slice';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error
  const rootReducers = {
    router: connectRouter(browserHistory),
    ...injectedReducers,
  };

  _.set(rootReducers, globalSliceKey, globalReducer);

  return combineReducers(rootReducers);
}
