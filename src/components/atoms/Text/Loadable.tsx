import { lazyLoad } from 'utils/loadable';

export const CustomText = lazyLoad(
  () => import('./index'),
  module => module.CustomText,
);
