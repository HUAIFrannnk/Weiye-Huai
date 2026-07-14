# Weiye Huai (Franklin) — Academic Portfolio

A responsive academic and professional portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Local development

Requirements: Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Run `pnpm build` before publishing to verify the production bundle.

## Personalize the site

- Replace the portrait placeholder in `app/page.tsx` with a Next.js `Image`.
- Update the university, dates, and placeholder roles in `app/cv/page.tsx`.
- Replace placeholder contact URLs in `app/contact/page.tsx`.
- Add a PDF to `public/` and update the CV button when a downloadable résumé is ready.
- Update `metadataBase` in `app/layout.tsx` to the final production domain.

## Deploy to Vercel

1. Push this project to a Git provider.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Keep the detected **Next.js** framework preset and default build settings.
4. Deploy. No environment variables are required.

Vercel will detect pnpm, run `pnpm build`, and publish all App Router pages automatically.
