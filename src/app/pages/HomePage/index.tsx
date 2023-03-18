import React, { memo, useEffect, useMemo, useState } from 'react';

import { HomepageWrapper } from './style';
import { useTranslation } from 'react-i18next';
import {
  Container,
  CustomText,
  ArrowUpDown,
  CustomButton,
  CustomInput,
} from 'components';
import { BORDER_RADIUS, COLORS, FONT_SIZES, FONT_WEIGHT } from 'config/theme';

interface Props {
  t: any;
}

export const HomePage = memo((props: Props) => {
  const { t } = props;
  const { i18n } = useTranslation();

  return (
    <HomepageWrapper className="homepage-wrapper">
      <ArrowUpDown />
      <Container className="main-content" display="flex" gap={20}>
        <CustomText color={COLORS['primary']} fontSize={FONT_SIZES['body1']}>
          Text 1
        </CustomText>
        <Container direction="column" className="second-column">
          <CustomText
            color={COLORS['primary']}
            fontSize={FONT_SIZES['body1']}
            marginBottom={20}
          >
            Text 2
          </CustomText>
          <CustomText
            color={COLORS['primary']}
            fontSize={FONT_SIZES['body1']}
            lineHeight={35}
            fontWeight={FONT_WEIGHT.bold}
          >
            Text 3
          </CustomText>
          <CustomText color={COLORS['primary']} fontSize={FONT_SIZES['body1']}>
            Text 4
          </CustomText>
          <CustomText
            color={COLORS['primary']}
            fontSize={FONT_SIZES['body1']}
            marginTop={50}
          >
            Text 5
          </CustomText>
        </Container>
        <CustomButton
          backgroundColor={COLORS['primary']}
          borderRadius={BORDER_RADIUS.size2}
          paddingLeft={10}
          paddingRight={10}
          paddingTop={5}
          paddingBottom={5}
        >
          <CustomText color={COLORS['black']} fontSize={FONT_SIZES['body1']}>
            Button Content
          </CustomText>
        </CustomButton>
      </Container>
      <Container>
        <CustomInput />
      </Container>
    </HomepageWrapper>
  );
});
