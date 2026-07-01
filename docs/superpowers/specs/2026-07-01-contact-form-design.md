# Contact form: validation + Resend submission

## Context

`EmailSection.jsx` renders the contact form UI, but `handleSubmit` is currently a TODO stub (`e.preventDefault()` only) — see `CLAUDE.md`. A prior implementation existed before the console/instrument redesign (commit `f479eb5`'s parent): it posted to `src/app/api/send/route.js`, which called Resend directly, and used `react-toastify` for a success toast. Both were removed during the redesign. This spec restores submission using Resend, adds react-hook-form + Zod for validation, and replaces the old toast-based feedback with inline UI (no toast provider currently exists in the app).

## Goals

- Client-side validation via react-hook-form + Zod.
- Server-side re-validation of the same schema (never trust client validation alone).
- Email delivery via Resend, using the shared `onboarding@resend.dev` sending domain (no verified custom domain yet).
- Inline success/error feedback in the existing form panel — no new toast dependency.

## Architecture & data flow

1. `EmailSection.jsx` (client component) uses `react-hook-form` with `zodResolver(contactSchema)` to validate `email`, `subject`, `message` before submit.
2. On valid submit, it POSTs JSON `{ email, subject, message }` to `src/app/api/send/route.js`.
3. The route re-validates the same `contactSchema` server-side, then calls `resend.emails.send(...)`:
   - `from: 'onboarding@resend.dev'`
   - `to: [process.env.TO_EMAIL]`
   - `reply_to: <submitted email>` — so replying from your inbox goes to the visitor, not to the shared sending address.
4. The route returns `{ ok: true }` (200) on success, or `{ ok: false, error }` (400 for invalid input, 500 for send failures).
5. The client reads that response and swaps the form panel to an inline success or error state.

## Validation schema (Zod)

Lives in a shared module, e.g. `src/lib/contactSchema.js`, imported by both the client component (via `zodResolver`) and the API route (via `safeParse`) so client and server can never drift apart:

```js
import { z } from 'zod';

export const contactSchema = z.object({
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email'),
  subject: z.string().trim().min(3, 'Subject must be at least 3 characters').max(120),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(2000),
});
```

Client-side form behavior:
- `react-hook-form` mode: `onBlur` (errors appear when a field loses focus, not on every keystroke), `reValidateMode: onChange` (RHF default — once a field has an error, it re-checks as the user types).
- Inline field errors render below each input, in the existing mono/label styling, replacing the current bare HTML `required` attributes.
- Submit button is disabled while `formState.isSubmitting` is true; label changes to "sending…".

## API route & error handling

`src/app/api/send/route.js`:
- Parse the request body, validate with `contactSchema.safeParse`. If invalid, return `NextResponse.json({ ok: false, error: 'Invalid input' }, { status: 400 })`. This is a guard against direct API calls bypassing the client form — the client's own Zod validation should prevent this in normal use.
- Wrap `resend.emails.send()` in try/catch.
  - On thrown error or a Resend-reported failure: `console.error` the real error server-side (for debugging), and return a generic `NextResponse.json({ ok: false, error: 'Failed to send message' }, { status: 500 })` to the client — no internal error detail is exposed to the client.
  - On success: `NextResponse.json({ ok: true })`.
- Email body: plain JSX (`From: <email>`, `<h1>subject</h1>`, `<p>message</p>`), matching the old implementation's approach. No `react-email` templates needed at this scope.

Client-side handling of the response:
- Non-200 or network failure → an inline error banner in the form panel: "Something went wrong — please email me directly at [your email]", including a `mailto:` fallback link.
- 200 → the form panel content swaps to a success message (mirroring the old `emailSubmitted` state pattern), styled with the existing `teal` accent (as already used for the "available for work" badge).

## Environment variables

Not committed to the repo; documented here for setup:

- `RESEND_API_KEY` — from the Resend dashboard.
- `TO_EMAIL` — must be the email address on the Resend account, since the shared `onboarding@resend.dev` sending domain can only deliver to the account owner's own verified address.
- Set in `.env.local` (gitignored) for local dev, and in Vercel project settings for production.

If a custom domain is verified in Resend later, `FROM_EMAIL` can be reintroduced and `TO_EMAIL` can point to any address — out of scope for this spec.

## Dependencies

New: `resend`, `react-hook-form`, `zod`, `@hookform/resolvers`.

## Testing

No automated test suite is configured in this repo (per `CLAUDE.md`). Verification is manual via `npm run dev`:

- Submit with empty fields → inline Zod errors appear per field; no request is sent.
- Submit with an invalid email format → email field shows an error.
- Submit with valid data → button shows "sending…", then the success message renders, and a real email arrives with the correct `reply_to` set to the submitted address.
- Temporarily break `RESEND_API_KEY` → confirm the inline error banner + `mailto:` fallback renders instead of a silent failure.

## Out of scope

- Spam protection (e.g. honeypot field) — explicitly deferred.
- Toast notifications — replaced by inline UI; no toast provider is being added.
- Custom Resend sending domain — using the shared `onboarding@resend.dev` domain for now.
- Rate limiting.
