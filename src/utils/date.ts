import {
  DATE_FORMAT,
  INFINITE_DATE,
  TIME_FORMAT,
} from '../config/constants';
import moment from 'moment';
import { format } from 'timeago.js';

/**
 *
 * @param time must be second
 * @returns time formatted
 */
export const timeAgo = (time = 0, lang?) => {
  // return format(time * DATE_MILI_SECOND, lang == 'vi' ? 'vi-VN' : 'en_US');
};

export const convertTimeToCurrentTimezone = (date: any) => {
  const d = new Date(date);
  const dTimezone = d.getTimezoneOffset() / -60;
  const timezone = new Date().getTimezoneOffset() / -60;
  return d.getTime() / 1000 + (dTimezone - timezone) * 60 * 60;
};

export const formatDateTime = value => {
  try {
    let defaultDateFormat = DATE_FORMAT;

    if (defaultDateFormat === 'undefined') {
      defaultDateFormat = DATE_FORMAT;
    }

    return value ? moment(value).format(defaultDateFormat) : '';
  } catch (error) {
    return false;
  }
};

export const formatTimeOnly = value => {
  try {
    return value ? moment(value).format('HH:mm A') : '';
  } catch (error) {
    return false;
  }
};

export const formatFullDateTime = value => {
  try {
    let defaultDateFormat = localStorage.getItem('date_format') || DATE_FORMAT;

    if (defaultDateFormat === 'undefined') {
      defaultDateFormat = DATE_FORMAT;
    }

    return value
      ? moment(value).format(`${defaultDateFormat} ${TIME_FORMAT}`)
      : '';
  } catch (error) {
    return false;
  }
};

export function convertUTCToLocalDate(date) {
  const localDate = moment(date)
    .subtract(new Date().getTimezoneOffset() / 60, 'hour')
    .toDate();
  return localDate;
}

export function convertLocalToUTCDate(date) {
  const utcDate = moment(date)
    .add(new Date().getTimezoneOffset() / 60, 'hour')
    .toDate();
  return utcDate;
}

export const getMomentDurationFormat = seconds => {
  return moment()
    .startOf('day')
    .add(seconds, 'second')
    .format('mm [mins] ss [secs]');
};

export const isToday = date => {
  if (!date) {
    return false;
  }

  return (
    moment(date).isSame(moment(), 'd') &&
    moment(date).isSame(moment(), 'M') &&
    moment(date).isSame(moment(), 'y')
  );
};

export const isInfinity = date => {
  if (!date) {
    return false;
  }

  return (
    moment(date).isSame(moment(INFINITE_DATE), 'd') &&
    moment(date).isSame(moment(INFINITE_DATE), 'M') &&
    moment(date).isSame(moment(INFINITE_DATE), 'y')
  );
};

export const formatDownloadDate = date => {
  return moment(date).format('DDMMMYYYY');
};

export const getFirstDayOfMonth = _date => {
  return new Date(_date.getFullYear(), _date.getMonth(), 2);
};

export const getLastDayOfMonth = _date => {
  return new Date(_date.getFullYear(), _date.getMonth() + 1, 1);
};
