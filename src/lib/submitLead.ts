export interface LeadForm {
  name: string
  companyName: string
  email: string
  phone: string
  source: string
  websiteUrl: string
  service: string
  goal: string
  challenge: string
  budget: string
  readyToStart: string
}

/** Must match the `name` of the hidden form in index.html. */
const NETLIFY_FORM_NAME = 'lead'

/**
 * Sends the lead form to Netlify Forms.
 *
 * Netlify registers the form from the hidden copy in index.html at deploy time,
 * then accepts urlencoded POSTs to any page with a matching `form-name`.
 * Submissions appear under Forms → "lead" in the Netlify dashboard.
 *
 * `botField` is the honeypot: real visitors never see that input, so if it has a
 * value the submission is from a bot and Netlify silently drops it.
 *
 * Returns true on success. On false the page tells the visitor to email us
 * instead, so no lead is silently lost.
 */
export async function submitLead(form: LeadForm, botField = ''): Promise<boolean> {
  // Netlify Forms only exists on Netlify. The Vite dev server would answer the
  // POST with index.html and fake a success, so don't pretend locally.
  if (import.meta.env.DEV) {
    console.info('[submitLead] Netlify Forms only works on a Netlify deploy. Lead not sent:', form)
    return false
  }

  const body = new URLSearchParams({
    'form-name': NETLIFY_FORM_NAME,
    'bot-field': botField,
    ...form,
  })

  const res = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  })
  return res.ok
}
