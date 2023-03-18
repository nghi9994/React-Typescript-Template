import React from 'react';
import styled from 'styled-components';

import { COLORS, FONT_SIZES, FONT_WEIGHT } from 'config/theme';

/**
 * If you want to prevent props meant to be consumed by styled components
 * turning it into a transient prop in styled-components.
 */

interface Props {
  className?: string;
  color?: string;
  children: any;
  fontSize?: string;
  fontWeight?: number;
  lineHeight?: number;
  marginBottom?: number;
  marginTop?: number;
}

export const CustomText = (props: Props) => {
  const {
    className,
    color = COLORS.black,
    children,
    fontSize = FONT_SIZES.body1,
    fontWeight = FONT_WEIGHT.normal,
    lineHeight = 0,
    marginBottom = 0,
    marginTop = 0,
  } = props;
  return (
    <CustomTextWrapper className={`custom-text-wrapper ${className || ''}`}>
      <Text
        className="custom-text"
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        marginBottom={marginBottom}
        marginTop={marginTop}
      >
        {children}
      </Text>
    </CustomTextWrapper>
  );
};

const CustomTextWrapper = styled.div<Props>``;
const Text = styled.p<Props>`
  &.custom-text {
    color: ${p => p.color};
    font-size: ${p => p?.fontSize};
    font-weight: ${p => p?.fontWeight};
    line-height: ${p => (p?.lineHeight ? `${p?.lineHeight}px` : 'normal')};
    margin-bottom: ${p => `${p?.marginBottom}px`};
    margin-top: ${p => `${p?.marginTop}px`};
  }
`;
