export const VERSION_NAME = '0.0.1';
export const WEB_URL = process.env.REACT_APP_WEB_URL;
export const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export const URI = {
  notFound: '/404',
  homePage: '/',
};

export const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PASSWORD_PATTERN =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/g;
export const MIN_PASSWORD_LENGTH = 8;
export const PHONE_PATTERN =
  /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
export const MIN_AGE = 16;
export const ANIMATION_DURATION = 200;
export const MODAL_ANIMATION_DURATION = 200;
export const DATE_FORMAT = 'DD/MM/YYYY';
export const TIME_FORMAT = 'HH:mm';
export const INFINITE_DATE = new Date(2100, 1, 1);
export const DELAY_BACKGROUND_API = 300;
export const TEXT_ELLIPSIS_MAX_LENGTH = 150;
export const INPUT_MAX_LENGTH = 512;
export const DEFAULT_UUID = '00000000-0000-0000-0000-000000000000';
export const LOADMORE_CONFIG = {
  LOADMORE_THRESHOLD: '200px',
  SkipCount: 0,
  MaxResultCount: 10,
};