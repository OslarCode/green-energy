// src/app/utils/analytics.ts
export const initGoogleAnalytics = () => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", process.env.NEXT_PUBLIC_GA_ID);
  }
};
