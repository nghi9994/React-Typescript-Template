import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectShowLoading, selectShowToast } from './slice/selectors';

export const Global = memo(() => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const showToast = useSelector(selectShowToast);
  const showLoading = useSelector(selectShowLoading);

  const handleDismissToast = useCallback(() => {
    // dispatch(globalActions.showToast(false));
  }, [dispatch]);

  const handleDismissLoading = useCallback(() => {
    // dispatch(globalActions.showLoading(false));
  }, [dispatch]);

  return <GlobalWrapper></GlobalWrapper>;
});

const GlobalWrapper = styled('div')``;
