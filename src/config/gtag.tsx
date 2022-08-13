/* eslint-disable fp/no-arguments */
/* eslint-disable prefer-rest-params */

declare global {
  interface Window {
    dataLayer: any;
  }
}

window.dataLayer = window.dataLayer || [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function gtag(_: string, __: unknown, ___?: unknown) {
  window.dataLayer.push(arguments);
}
