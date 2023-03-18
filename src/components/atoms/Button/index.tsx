import React, { useEffect } from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import { BORDER_RADIUS, COLORS } from 'config/theme';

interface Props {
  backgroundColor?: string;
  borderRadius?: string;
  borderColor?: string;
  children: any;
  className?: string;
  disabled?: boolean;
  onClick?: any;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  type?: 'button' | 'submit' | 'reset';
}

export function CustomButton(props: Props) {
  const {
    className = '',
    children,
    backgroundColor = COLORS.white,
    borderColor,
    borderRadius = BORDER_RADIUS.size1,
    disabled = false,
    onClick,
    paddingLeft = 0,
    paddingRight = 0,
    paddingTop = 0,
    paddingBottom = 0,
    type = 'button',
  } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <CustomButtonWrapper className={`custom-button-wrapper ${className}`}>
      <Button
        className={`custom-button ${classnames({
          disabled: disabled,
        })}`}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        borderRadius={borderRadius}
        disabled={disabled}
        onClick={handleClick}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        type={type}
      >
        {children}
      </Button>
    </CustomButtonWrapper>
  );
}

const CustomButtonWrapper = styled.div<Props>``;
const Button = styled.button<Props>`
  &.custom-button {
    background: ${p => p?.backgroundColor};
    border: ${p => (p?.borderColor ? `1px solid ${p.borderColor}` : 'none')};
    border-radius: ${p => p?.borderRadius};
    cursor: pointer;
    padding-top: ${p => `${p.paddingTop}px`};
    padding-bottom: ${p => `${p.paddingBottom}px`};
    padding-left: ${p => `${p.paddingLeft}px`};
    padding-right: ${p => `${p.paddingRight}px`};
    text-align: center;
    width: auto;
  }

  &.disabled {
    cursor: none;
  }
`;
