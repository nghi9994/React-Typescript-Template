import { lazyLoad } from 'utils/loadable';

export const LoadingCircle = lazyLoad(
  () => import('./index'),
  module => module.LoadingCircle,
);
