/**
 * Link to the NexaDigital client portal (sign-in / dashboard).
 * Set VITE_PORTAL_URL in .env. If it's empty, the "Client Login" button is hidden.
 */
export const PORTAL_URL: string = (import.meta.env.VITE_PORTAL_URL ?? '').trim()

export const CONTACT_EMAIL = 'info@nexadigital.com.ng'
