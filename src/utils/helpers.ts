export const handleCloseWebview = () => {
  try {
    (window as any).onCloseWebview();
  } catch (error) {
    console.log('@error', error);
  }
};

export const numberWithComma = (number: any, type: ',' | '.' = ',') => {
  if (!number) {
    return '0';
  }

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, type);
};

