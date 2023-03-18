import React from 'react';
import styled from 'styled-components';
import { theme } from 'utils/theme';
interface Props {
  color?: string;
}

export function BackIcon(props: Props) {
  const { color } = props;

  return <Wrapper className="back-icon" color={color}></Wrapper>;
}

const Wrapper = styled.div<{ color?: string }>`
  border-left: 2px solid ${props => props.color || theme.eve10};
  border-bottom: 2px solid ${props => props.color || theme.eve10};
  height: 12px;
  width: 12px;
  transform: rotate(45deg);
  &:hover {
    cursor: pointer;
  }
`;
