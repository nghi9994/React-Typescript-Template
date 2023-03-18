import React from 'react';
import styled from 'styled-components';

interface Props {
  children: any;
  className?: string;
  direction?: 'row' | 'column';
  display?: 'block' | 'flex';
  gap?: number;
}

export const Container = (props: Props) => {
  const {
    children,
    className = '',
    direction = 'row',
    display = 'block',
    gap = 0,
  } = props;
  return (
    <ContainerWrapper
      className={`container-wrapper ${className}`}
      direction={direction}
      gap={gap}
      display={display}
    >
      {children}
    </ContainerWrapper>
  );
};

const ContainerWrapper = styled.div<Props>`
  &.container-wrapper {
    display: ${p => p?.display};
    flex-direction: ${p => p?.direction};
    align-items: center;
    gap: ${p => `${p?.gap}px`};
  }
`;
