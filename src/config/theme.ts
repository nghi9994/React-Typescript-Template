import {
  BorderRadius,
  FontWeight,
  Colors,
  FontSizes,
  ScreenSize,
} from '../types';

export const MAX_WIDTH = '1250px';
export const MAX_WIDTH_MOBILE = '90%';

export const BORDER_RADIUS: BorderRadius = {
  size1: '4px',
  size2: '10px',
  size3: '20px',
};

export const COLORS: Colors = {
  primary: '#14EE97', // light green
  secondary: '#246BFD', // light blue
  black: '#000',
  white: '#FFFFFF',
  aia: '#D31145', // dark pink
  eve3: '#00AEA0', // dark green
  eve7: '#FF2222', // red
  eve8: '#336BA6', // blue
  eve9: '#151515',
  eve10: '#454545',
  eve11: '#7B7B7B',
  eve12: '#aeaeae',
  eve13: '#D6D6D6',
  eve14: '#E0E0E0',
  eve15: '#EFEFEF',
};

export const FONT_SIZES: FontSizes = {
  title1: '64px',
  subtitle1: '20px',
  body1: '16px',
  small1: '12px',
};

export const FONT_WEIGHT: FontWeight = {
  light: 300,
  normal: 400,
  lightbold: 500,
  semibold: 600,
  bold: 700,
};

export const SCREEN_SIZE: ScreenSize = {
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1800px',
  xxl: '2200px',
};
