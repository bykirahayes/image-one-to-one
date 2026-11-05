# Aspect IT Website

A standalone website built with React, TanStack Start, Vite and Tailwind CSS. **Lovable is not required** to develop, build, run or host this project.

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

Open the local URL printed by Vite (normally http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

The production server listens on the configured `PORT` (default depends on the Nitro runtime). For a local preview, run `npm run preview`.

## Docker

Build and start the container:

```bash
docker compose up --build -d
```

Then open http://localhost:3000. Stop it with:

```bash
docker compose down
```

## Deployment

This is a TanStack Start / Nitro server-rendered application, not a plain static HTML export. It can be deployed independently to:

- A VPS or home server using Docker Compose, Caddy or Nginx, and HTTPS.
- A Node.js host that supports the Nitro production output.
- A supported serverless or edge host using the matching Nitro preset.

For a VPS, point your reverse proxy at the application container on port 3000 and configure TLS at the proxy. Keep secrets in the host's environment configuration, not in source control.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run the built Nitro server
- `npm run preview` — preview the production build
- `npm run lint` — lint source
- `npm test` — run tests

## Notes

- The app does not require a Lovable account or Lovable hosting.
- The repository is private; deployment services need access to it or you can deploy from a local clone.
- Verify contact-form delivery and all external links before putting the site live.
- Never commit API keys, passwords or other secrets.
