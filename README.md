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

## Not done yet

- **Lead form is not connected.** `src/lib/submitLead.ts` is a stub that returns
  `false`, so visitors are told to email `info@nexadigital.com.ng` instead.
  In the portal the form went to Zoho CRM via a Convex action. Implement
  `submitLead()` once a destination is chosen.
- **Client Login** button is hidden until `VITE_PORTAL_URL` is set in `.env`
  (see `.env.example`).
