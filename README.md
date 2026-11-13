# Nexa Digital — Agency Site

Standalone marketing site for Nexa Digital, extracted from the landing page of the
[NexaDigital client portal](https://github.com/nexa-digitals/NexaDigital).
No backend and no sign-in: it's a static Vite + React + Tailwind site.

## Run

```bash
npm install
npm run dev      # http://localhost:3001
npm run build    # type-check + production build into dist/
```

## Pages

| URL          | Page                     |
|--------------|--------------------------|
| `/`          | Landing page             |
| `/portfolio` | Portfolio / case studies |
| `/privacy`   | Privacy policy           |
| `/terms`     | Terms of service         |

`public/_redirects` and `public/.htaccess` make these deep links work on
Netlify/Cloudflare Pages and Apache hosts.

## Where content lives

- **Services** — `src/data/services.ts` (snapshot of the portal's `services` table)
- **Portfolio** — `src/components/ViewProjects.tsx` (`PRIMARY_PROJECTS` + snapshot of the portal's `projects` table)
- **Team, testimonials, process, copy** — `src/components/LandingPage.tsx`
- **Contact email** — `src/lib/config.ts`

These are copies. Editing services in the portal's admin panel does **not** update this site.

## Contact form (Netlify Forms)

The "Get in Touch" form submits to **Netlify Forms** as the form named `lead`.

- A hidden copy of the form in `index.html` lets Netlify register it at deploy time.
  If you add or rename a field, update it there **and** in `src/lib/submitLead.ts`.
- Submissions show up in Netlify under **Forms → lead**. Set up email alerts under
  **Site configuration → Notifications → Emails and webhooks → Form submission notifications**.
- If **Forms** is disabled for the site, enable form detection and redeploy.
- A hidden `bot-field` honeypot filters out basic spam.
- It only works on a Netlify deploy. With `npm run dev` the form logs the lead to the
  console and tells you to email instead.

In the portal this form went to Zoho CRM. To send leads to Zoho as well, add a
Netlify form-submission webhook or a small Netlify Function.

## Client Login

The "Client Login" button is hidden until `VITE_PORTAL_URL` is set (in `.env`
locally, or in Netlify's environment variables). See `.env.example`.
