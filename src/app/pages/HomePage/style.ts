import styled from 'styled-components';
import { theme, layoutConfig } from 'utils/theme';

export const HomepageWrapper = styled.div`
  &.homepage-wrapper {
    margin: 0 auto;
    max-width: ${layoutConfig.maxWidth};
    width: 100%;
    .ptr__pull-down {
      top: 115px;
    }
  }

  .homepage-content {
    margin: auto;
    padding: 0 16px;
    width: 100%;
  }

  .statistics-board-wrapper {
    margin-top: 120px;
    .statistics-box {
      &__title {
        .text-wrapper {
          color: ${theme.aia};
        }
      }
    }
  }

  .card-wrapper {
    margin-top: 30px;
  }
`;
