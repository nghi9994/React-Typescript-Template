import { lazyLoad } from 'utils/loadable';

export const CustomInput = lazyLoad(
  () => import('./index'),
  module => module.CustomInput,
);
