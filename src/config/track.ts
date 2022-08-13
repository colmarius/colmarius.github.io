import { gtag } from './gtag';

export const trackPage = (path: string) => {
  gtag('set', 'page_path', path);
  gtag('event', 'page_view');
};
