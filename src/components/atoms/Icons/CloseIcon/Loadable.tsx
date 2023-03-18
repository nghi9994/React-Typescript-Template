import { lazyLoad } from 'utils/loadable';

export const CloseIcon = lazyLoad(
  () => import('./index'),
  module => module.CloseIcon,
);
