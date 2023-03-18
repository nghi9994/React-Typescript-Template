import { lazyLoad } from 'utils/loadable';

export const ArrowUpDown = lazyLoad(
  () => import('./index'),
  module => module.ArrowUpDown,
);
