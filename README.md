# Jyothi Restaurant Web App

A React/Vite restaurant website with installable PWA support, a NestJS API for reservation and contact requests, and a Capacitor Android wrapper.

## Features

- Restaurant pages for home, about, menu, events, gallery, reservations, and contact.
- Responsive reservation and contact forms with validation, progress, and clear success/error states.
- NestJS API validates requests and limits public request rates. Messages and reservation requests are stored in MongoDB when configured.
- PWA manifest and offline shell caching. API requests are never cached.
- Capacitor Android project source wraps the same web app.

## Local development

Requirements: Node.js 20 or newer and MongoDB for persisted forms.

```bash
npm install
Copy-Item .env.example .env
```

Set `MONGODB_URI` in `.env` to a local or hosted MongoDB connection string. Start the API and frontend in separate terminals:

```bash
npm run api:dev
npm run dev
```

The frontend runs at `http://localhost:5173`; Vite proxies `/api` to the Nest API at port `3000`. The API health endpoint is `/api/health`.

Without `MONGODB_URI`, pages still run but form submissions return a service-unavailable message and no request is stored.

## Vercel deployment

Import this repository as a Vercel project. The included `vercel.json` builds the Vite app into `dist`, rewrites client-side routes to the app shell, and Vercel serves the NestJS handler in `api/[...path].ts`.

In the Vercel project’s **Settings → Environment Variables**, set:

- `MONGODB_URI` — connection string for a MongoDB database. Restrict database network access and use a database user with access only to this app’s database.
- `FRONTEND_URLS` — optional comma-separated production origins if the app is hosted outside `*.vercel.app`.

Redeploy after adding environment variables. Keep secrets in Vercel settings; never commit `.env` or paste database credentials into issues or chat.

## Android

Android builds require Android Studio and its SDK. Add the native project and sync after setting the deployed API base URL:

```powershell
$env:VITE_API_URL = "https://<your-vercel-domain>"
npm run android:add
npm run cap:sync
npm run cap:open
```

Build and sign the APK/AAB from Android Studio. Do not include private API credentials in the Android app; the API is public and applies validation and rate limiting.

## Project boundaries

This repository is a restaurant website demo. Confirm the restaurant’s address, phone, social accounts, menu, hours, and image usage rights before publishing business details. Reservation requests are requests for confirmation, not guaranteed bookings.
