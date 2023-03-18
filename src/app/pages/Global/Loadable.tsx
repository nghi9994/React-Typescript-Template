import { lazyLoad } from 'utils/loadable';

export const Global = lazyLoad(
  () => import('./index'),
  module => module.Global,
);
