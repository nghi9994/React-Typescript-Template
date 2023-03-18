import { lazyLoad } from 'utils/loadable';

export const CustomPullToRefresh = lazyLoad(
  () => import('./index'),
  module => module.CustomPullToRefresh,
);
