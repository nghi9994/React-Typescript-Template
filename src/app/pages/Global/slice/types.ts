export const TOAST_COLOR_TYPE = {
  DANGER: 'danger',
  SECONDARY: 'secondary',
};

export type GlobalState = {
  showToast?: any;
  showLoading: number;
  token?: string;
  userId?: string;
  userInfo?: any;
  categoryItems?: any;
  categorySubItems?: any;
  categoryType?: any;
  voucherItems?: any;
};

export type ContainerState = GlobalState;
