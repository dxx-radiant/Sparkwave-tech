# Sparkwave Tech (React rebuild)

React + Vite rebuild of sparkwave-tech.com (previously Blazor WebAssembly).

## Setup

1. Add the images listed in `public/images/PUT_IMAGES_HERE.txt`, then delete that file.
2. `npm install`
3. `npm run dev` and open the local URL it prints.

## Editing content

- Price, Square payment link, specs, features: `src/data/site.js`
- Contact info in the footer: `src/data/site.js`
- Page text: `src/pages/`
- Styling: `src/index.css`

## Deploying

Build command: `npm run build`   Output folder: `dist`

**Cloudflare Pages / Netlify (recommended):** connect the GitHub repo, use the
build settings above, then add `sparkwave-tech.com` as a custom domain.
`public/_redirects` makes direct links like `/solar` work.

**GitHub Pages:** the build script copies `index.html` to `404.html` so
`/solar` works on refresh, and `public/CNAME` sets the custom domain. Deploy
the `dist` folder (e.g. with the `gh-pages` package or a GitHub Actions workflow).
You can delete `public/CNAME` if you're not using GitHub Pages.

## Switching DNS

Only change the domain's DNS after the new site is live on its temporary
URL and you've checked every page and the Purchase button.
