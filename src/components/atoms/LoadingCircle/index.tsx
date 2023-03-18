import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

import { COLORS } from 'config/theme';

interface Props {
  className?: any;
  color?: string;
  size?: number;
  type?: 'spin' | 'spinningBubbles';
}

export function LoadingCircle(props: Props) {
  const { className = '', color = COLORS['aia'], size, type = 'spin' } = props;

  return (
    <LoadingCircleWrapper className={`loading-circle-wrapper ${className}`}>
      <ReactLoading
        color={color}
        type={type || 'spin'}
        height={size || 30}
        width={size || 30}
      />
    </LoadingCircleWrapper>
  );
}

const LoadingCircleWrapper = styled.div`
  &.loading-wrapper {
    margin: auto;
    & > div {
      margin: auto;
    }
  }
`;
