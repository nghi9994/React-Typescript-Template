import { lazyLoad } from 'utils/loadable';

export const BackIcon = lazyLoad(
  () => import('./index'),
  module => module.BackIcon,
);
