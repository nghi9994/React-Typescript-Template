import { lazyLoad } from 'utils/loadable';

export const Container = lazyLoad(
  () => import('./index'),
  module => module.Container,
);
