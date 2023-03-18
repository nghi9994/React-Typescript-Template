import { lazyLoad } from 'utils/loadable';

export const CustomButton = lazyLoad(
  () => import('./index'),
  module => module.CustomButton,
);
