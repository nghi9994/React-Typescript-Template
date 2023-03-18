import { BORDER_RADIUS, COLORS } from 'config/theme';
import React from 'react';
import styled from 'styled-components';

interface Props {
  backgroundColor?: string;
  borderRadius?: string;
  borderColor?: string;
  className?: string;
  onChange?: any;
  placeholder?: string;
  title?: string;
}

export const CustomInput = (props: Props) => {
  const {
    className = '',
    backgroundColor = COLORS.white,
    borderColor = COLORS.black,
    borderRadius = BORDER_RADIUS.size3,
    onChange,
    placeholder = 'Please input',
    title = 'Field you have to input',
  } = props;

  const handleInputChange = (e: any) => {
    console.log('🚀 ~ handleInputChange ~ e:', e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <CustomInputWrapper className={`custom-input-wrapper ${className}`}>
      <Input
        className="custom-input"
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        borderRadius={borderRadius}
        onChange={handleInputChange}
        placeholder={placeholder}
        title={title}
      />
    </CustomInputWrapper>
  );
};

const CustomInputWrapper = styled.div``;
const Input = styled.input<Props>`
  &.custom-input {
    background: ${p => p?.backgroundColor};
    border: ${p => `1px solid ${p.borderColor}`};
    border-radius: ${p => p?.borderRadius};
    padding: 5px 10px;
    width: auto;
  }
`;
