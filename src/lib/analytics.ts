/**
 * Analytics Service
 * Handles all analytics tracking with cookie consent integration
 */

import { canUseAnalytics, initializeAnalytics } from "./cookieConsent";

// Extend Window interface for analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Initialize Google Analytics (if you add it in the future)
 * Only loads if user has consented to analytics cookies
 */
export const initGoogleAnalytics = (measurementId: string) => {
  initializeAnalytics(() => {
    // Load Google Analytics script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      anonymize_ip: true, // GDPR compliance
      cookie_flags: "SameSite=None;Secure",
    });

    console.log("✅ Google Analytics initialized with user consent");
  });
};

/**
 * Track page view
 */
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (!canUseAnalytics()) {
    console.log("📊 Analytics disabled - Page view not tracked:", pagePath);
    return;
  }

  if (window.gtag) {
    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
    console.log("📊 Page view tracked:", pagePath);
  }
};

/**
 * Track custom event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>,
) => {
  if (!canUseAnalytics()) {
    console.log("📊 Analytics disabled - Event not tracked:", eventName);
    return;
  }

  if (window.gtag) {
    window.gtag("event", eventName, eventParams);
    console.log("📊 Event tracked:", eventName, eventParams);
  }
};

/**
 * Track button click
 */
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent("button_click", {
    button_name: buttonName,
    location: location || window.location.pathname,
  });
};

/**
 * Track form submission
 */
export const trackFormSubmit = (formName: string, success: boolean) => {
  trackEvent("form_submit", {
    form_name: formName,
    success: success,
  });
};

/**
 * Track user signup
 */
export const trackSignup = (method: string = "email") => {
  trackEvent("sign_up", {
    method: method,
  });
};

/**
 * Track user login
 */
export const trackLogin = (method: string = "email") => {
  trackEvent("login", {
    method: method,
  });
};

/**
 * Track service inquiry
 */
export const trackServiceInquiry = (serviceName: string) => {
  trackEvent("service_inquiry", {
    service_name: serviceName,
  });
};

/**
 * Track project view
 */
export const trackProjectView = (projectName: string) => {
  trackEvent("project_view", {
    project_name: projectName,
  });
};

/**
 * Track blog post view
 */
export const trackBlogView = (blogTitle: string, blogId: string) => {
  trackEvent("blog_view", {
    blog_title: blogTitle,
    blog_id: blogId,
  });
};

/**
 * Track CTA click
 */
export const trackCTAClick = (ctaName: string, ctaLocation: string) => {
  trackEvent("cta_click", {
    cta_name: ctaName,
    cta_location: ctaLocation,
  });
};

/**
 * Simple analytics for when user rejects cookies
 * This only logs to console and doesn't send any data
 */
export const logLocalEvent = (eventName: string, data?: any) => {
  console.log(`📊 [Local Event] ${eventName}:`, data);
  // You could store this in localStorage for basic insights
  // without violating user privacy
};
