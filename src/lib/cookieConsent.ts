/**
 * Cookie Consent Utilities
 * Helper functions to manage and check cookie consent preferences
 */

export interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = "nexa_cookie_consent";
const COOKIE_PREFERENCES_KEY = "nexa_cookie_preferences";

/**
 * Check if user has given consent
 */
export const hasConsent = (): boolean => {
  return localStorage.getItem(COOKIE_CONSENT_KEY) === "true";
};

/**
 * Get user's cookie preferences
 */
export const getPreferences = (): CookiePreferences | null => {
  const prefs = localStorage.getItem(COOKIE_PREFERENCES_KEY);
  if (!prefs) return null;

  try {
    return JSON.parse(prefs) as CookiePreferences;
  } catch {
    return null;
  }
};

/**
 * Check if a specific cookie type is allowed
 */
export const isCookieAllowed = (type: keyof CookiePreferences): boolean => {
  const prefs = getPreferences();
  if (!prefs) return false;
  return prefs[type] === true;
};

/**
 * Check if analytics cookies are allowed
 */
export const canUseAnalytics = (): boolean => {
  return isCookieAllowed("analytics");
};

/**
 * Check if marketing cookies are allowed
 */
export const canUseMarketing = (): boolean => {
  return isCookieAllowed("marketing");
};

/**
 * Check if functional cookies are allowed
 */
export const canUseFunctional = (): boolean => {
  return isCookieAllowed("functional");
};

/**
 * Reset cookie consent (useful for testing or user request)
 */
export const resetConsent = (): void => {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  localStorage.removeItem(COOKIE_PREFERENCES_KEY);
};

/**
 * Initialize analytics only if user has consented
 * Call this function when setting up your analytics (e.g., Google Analytics, Mixpanel)
 */
export const initializeAnalytics = (callback: () => void): void => {
  if (canUseAnalytics()) {
    callback();
  }
};

/**
 * Initialize marketing tools only if user has consented
 * Call this function when setting up marketing tools (e.g., Facebook Pixel, Google Ads)
 */
export const initializeMarketing = (callback: () => void): void => {
  if (canUseMarketing()) {
    callback();
  }
};
