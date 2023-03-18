export const LimitedWordTextarea = (content, limit = 35) => {
  if (!content) {
    return '';
  }
  const str = content.substring(0, limit);
  return content.length > limit ? `${str}...` : content;
};

export const convertStringToArr = (str: string) => {
  const re = /\r?\n/;
  const arrString = str ? str.split(re) : [];
  return arrString.map(x => x.substr(x.indexOf(' ') + 1));
};

export const stripHtml = html => {
  if (!document) {
    return html;
  }

  var tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};

const suffixes = ['bytes', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'];
export const getFileSizeFormat = (bytes: number) => {
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return (
    (!bytes && '0 bytes') ||
    (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + suffixes[i]
  );
};

export const isUrl = (url: string) => {
  return /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi.test(
    url,
  );
};

export const isPhoneNumber = (phone: string) => {
  return /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/gim.test(
    phone,
  );
};

export const castToTitleCase = (str: string = '') => {
  return str.replace(/^[A-Za-z]| \w/g, l => l.toUpperCase());
};

export const textCapitalize = (str = ''): string => {
  return str.replace(/^[A-Za-z]| \w/g, l => l.toUpperCase());
};

export const getExtensionFile = (fileName: string) => {
  const re = /(?:\.([^.]+))?$/;
  if (!re.exec(fileName)![1]) {
    return '';
  }
  return re.exec(fileName)![1].toLowerCase();
};

export const truncateFileName = function (fullStr, strLen, separator = '...') {
  if (fullStr.length <= strLen) return fullStr;

  const sepLen = separator.length;
  const charsToShow = strLen - sepLen;

  const TRUNCATE_INDEX = 1.4;

  const frontChars = Math.ceil(charsToShow / TRUNCATE_INDEX);
  const backChars = Math.floor(charsToShow / TRUNCATE_INDEX);

  return `${fullStr.substr(0, frontChars)}${separator}${fullStr.substr(
    fullStr.length - backChars,
  )}`;
};

export const getProductHeroImage = product => {};

export const getInsightHeroImage = insight => {};

export const toBase64 = (fileObj: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileObj);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

export const isUUID = function (uuid) {
  let s: any = '' + uuid;

  s = s.match(
    '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
  );
  if (s === null) {
    return false;
  }
  return true;
};

export const upperCaseFirstCharacter = (string = '') => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const getAccountFullName = user => {
  return `${user?.name || ''} ${user?.surname || ''}`;
};
export const getFeedTargetFullName = user => {
  return `${user?.name || ''} ${user?.surname || ''}`;
};

// export  const

const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

export const niceBytes = (x: string | number = '0') => {
  let l = 0,
    n = parseInt(x + '', 10) || 0;

  while (n >= 1024 && ++l) {
    n = n / 1024;
  }

  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l];
};

export const checkForValidatePassword = pass => {
  const minChar = pass.length >= 8;
  const lowercase = pass.match(/(.*[a-z].*)/g);
  const uppercase = pass.match(/(.*[A-Z].*)/g);
  const numberAndSpecialChar =
    pass.match(/[0-9]/g) && pass.match(/[^A-Za-z0-9]/g);
  const obj = {
    value: pass,
    minChar,
    lowercase,
    uppercase,
    numberAndSpecialChar,
    isValidAll: minChar && lowercase && uppercase && numberAndSpecialChar,
  };
  return obj;
};