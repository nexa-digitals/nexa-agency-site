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

/**
 * TODO: connect the lead form.
 *
 * In the portal this called the Convex action `zoho.sendToZoho`, which forwards
 * the form to a Zoho CRM webhook. This standalone site has no backend yet, so
 * submissions go nowhere. When you decide on a destination, implement it here
 * and return true on success. Nothing else in the page needs to change.
 *
 * Returning false makes the page tell the visitor to email us instead, so no
 * lead is silently lost.
 */
export async function submitLead(_form: LeadForm): Promise<boolean> {
  return false
}
