import React from 'react';
import styled from 'styled-components';
import { faXmark, faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  className?: any;
  color?: string;
  onClick?: any;
}

export function LongArrowDown(props: Props) {
  const { className, color, onClick } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <LongArrowDownWrapper
      className={`long-arrow-down-wrapper ${className || ''}`}
      onClick={handleClick}
    >
      <FontAwesomeIcon color={color} icon={faArrowDownLong} />
    </LongArrowDownWrapper>
  );
}

export const LongArrowDownWrapper = styled.div``;
