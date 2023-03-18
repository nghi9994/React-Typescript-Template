// Lib
import React from 'react';
import styled from 'styled-components';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  className?: any;
  color?: string;
  onClick?: any;
}

export function CloseIcon(props: Props) {
  const { className, color, onClick } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <CloseIconWrapper
      className={`close-icon-wrapper ${className || ''}`}
      onClick={handleClick}
    >
      <FontAwesomeIcon color={color} icon={faXmark} />
    </CloseIconWrapper>
  );
}

export const CloseIconWrapper = styled.div``;
