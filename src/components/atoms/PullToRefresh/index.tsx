import React from 'react';
import styled from 'styled-components';
import PullToRefresh from 'react-simple-pull-to-refresh';
import { COLORS } from 'config/theme';

interface Props {
  className?: any;
  children: any;
}

export function CustomPullToRefresh(props: Props) {
  const { children, className = '' } = props;

  // Pull to refresh
  function handleRefresh() {
    return new Promise(resolve => {
      setTimeout(() => {
        window.location.reload();
      }, 800);
    });
  }

  return (
    <PullToRefreshWrapper className={`pull-to-refresh-wrapper ${className}`}>
      <PullToRefresh
        className="pull-to-refresh"
        onRefresh={handleRefresh}
        pullDownThreshold={80}
        maxPullDownDistance={100}
        pullingContent=""
      >
        {children}
      </PullToRefresh>
    </PullToRefreshWrapper>
  );
}

export const PullToRefreshWrapper = styled.div`
  &.pull-to-refresh-wrapper {
    .pull-to-refresh {
      height: 100vh;
      // overflow-y: auto;

      .ptr {
        &__pull-down {
          .ptr {
            &__loader {
              .lds-ellipsis div {
                background: ${COLORS.aia};
              }
            }
            &__pull-down--pull-more {
              color: ${COLORS.aia};
              text-align: center;
            }
          }
        }
        &__children {
          height: 100vh;
          padding-bottom: 30px;
          overflow-y: auto;
        }
      }
    }
  }
`;
