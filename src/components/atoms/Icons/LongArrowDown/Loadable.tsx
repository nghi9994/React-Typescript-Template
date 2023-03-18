import { lazyLoad } from 'utils/loadable';

export const LongArrowDown = lazyLoad(
  () => import('./index'),
  module => module.LongArrowDown,
);
