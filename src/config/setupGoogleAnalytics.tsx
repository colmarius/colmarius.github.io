import { gtag } from './gtag';

export const setupGoogleAnalytics = () => {
  const configKey = import.meta.env.VITE_GOOGLE_ANALYTICS_KEY;
  if (!configKey) return;
  gtag('js', new Date());
  gtag('config', configKey);
};
