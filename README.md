# Aspect IT Website

Standalone Aspect IT website built with React, TanStack Start, Vite and Tailwind CSS. Develop, build and deploy it without Lovable.

## Requirements

- Node.js 22 or newer
- npm 10 or newer

## Run locally

```bash
git clone https://github.com/bykirahayes/image-one-to-one.git
cd image-one-to-one
npm install
npm run dev
```

Vite prints the local URL (normally http://localhost:3000). For access from another device, use the machine's LAN IP and the port shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production build uses TanStack Start and Nitro. Deploy the generated server output to a compatible Node/serverless/edge runtime. This is not a plain static `dist` site unless you deliberately convert it to static generation.

## Deployment

- **Self-hosting:** Run the production server behind Caddy or Nginx, with HTTPS and a domain.
- **Cloud hosting:** Connect this repository to a host supporting TanStack Start and Nitro. Set the appropriate Nitro preset for the chosen host.
- **Local development:** Use any code editor or terminal with Node.js. Lovable is not required.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run preview` — preview production output
- `npm run lint` — lint source
- `npm test` — tests

## Notes

- Never commit secrets. Configure private values in the hosting platform.
- The repository is private, so hosting providers need repository access.
- Test the contact form and external integrations in production before launch.
