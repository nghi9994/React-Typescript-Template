// Lib
import jwt_decode from 'jwt-decode';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// Constants & Styles
import { URI } from 'config/constants';
import '../config/font.css';
// Components
import { Global } from './pages/Global/Loadable';
import { HomePage } from './pages/HomePage/Loadable';
// Redux & Saga
import { globalSaga } from './pages/Global/slice/saga';
import { selectToken } from './pages/Global/slice/selectors';
import {
  globalActions,
  globalReducer,
  globalSliceKey,
} from './pages/Global/slice/slice';
import {
  homeActions,
  homeReducer,
  homeSliceKey,
} from './pages/HomePage/slice/slice';
import { homeSaga } from './pages/HomePage/slice/saga';
import {
  selecCycleOverview,
  selecCycleList,
} from './pages/HomePage/slice/selector';

// let eveToken: any = (window as any).eveToken;
// let eveLang: any = (window as any).evei18nextLng

export const App = memo(() => {
  // Home tab
  useInjectSaga({ key: homeSliceKey, saga: homeSaga });
  useInjectReducer({ key: homeSliceKey, reducer: homeReducer });

  // global
  useInjectSaga({ key: globalSliceKey, saga: globalSaga });
  useInjectReducer({ key: globalSliceKey, reducer: globalReducer });

  // State
  const [inProp, setInProp] = useState<boolean>(false);

  // Others
  const eveToken = useSelector(selectToken);
  const cycleList = useSelector(selecCycleList);
  const cycleOverview = useSelector(selecCycleOverview);
  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();

  // let tokenDecoded: any = {};

  // DEBUG:
  // console.log('test eveToken :>> ', eveToken);
  // console.log('test cycleOverview :>> ', cycleOverview);
  // console.log('test cycleList :>> ', cycleList);

  // Get token from local storage
  useEffect(() => {
    dispatch(globalActions.getToken({}));
  }, [dispatch]);

  // Get language from local storage
  useEffect(() => {
    let defaultLang = localStorage.getItem('i18nextLng') || 'en';
    i18n.changeLanguage(defaultLang);
  }, [i18n, eveToken, location]);

  // Get user info from api
  useEffect(() => {
    if (eveToken) {
      // tokenDecoded = jwt_decode(eveToken);
      // dispatch(globalActions.getUserInfo(tokenDecoded['Account:EmployeeId']));

      /* Call api to init data */
      dispatch(homeActions.getCycleOverview({}));
      dispatch(homeActions.getCycleList({}));
    }
  }, [dispatch, eveToken]);

  // Load animation effect
  useEffect(() => {
    /* Waiting for DOM loaded before add animation class */
    var timeout = setTimeout(() => {
      setInProp(true);
      clearTimeout(timeout);
    }, 200);
  }, []);

  // if (!eveToken) {
  //   return <></>;
  // }

  return (
    <>
      <TransitionGroup>
        <CSSTransition
          in={inProp}
          key={location.key}
          classNames="fade"
          timeout={300}
        >
          <Switch location={location}>
            <Route exact path={URI.homePage}>
              <HomePage t={t} />
            </Route>

            <Redirect from="*" to={URI.homePage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Global />
    </>
  );
});
