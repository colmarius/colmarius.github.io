/* eslint-disable fp/no-arguments */
/* eslint-disable prefer-rest-params */

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function gtag(_: string, __: unknown, ___?: unknown) {
  if (typeof window !== 'undefined') {
    window.dataLayer.push(arguments);
  }
}
