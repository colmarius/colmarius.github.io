/* eslint-disable fp/no-arguments */
/* eslint-disable prefer-rest-params */

declare global {
  interface Window {
    dataLayer: any;
  }
}

export const setupGoogleAnalytics = () => {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function gtag(_: string, __: unknown) {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', import.meta.env.VITE_GOOGLE_ANALYTICS_KEY);
};
