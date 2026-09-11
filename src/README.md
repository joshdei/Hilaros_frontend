# Hilaros React + TypeScript frontend

This converts the Laravel Blade user/auth/giving UI into React TSX and adds React Router routes plus a Laravel API client.

## Install
```bash
npm i react-router-dom
```

If starting from a Vite React TS project, copy this `src/` directory over your existing `src/`.

Create `.env`:
```env
VITE_API_URL=http://localhost:8000/api
```

## Routes
- `/`
- `/login`
- `/signup`
- `/dashboard`
- `/categories`
- `/qr-code`
- `/bank-accounts`
- `/transactions`
- `/members`
- `/settings`
- `/give/:slug`
- `/give/:slug/thank-you`

## Laravel API contract expected
The frontend calls:
`POST /login`, `POST /register`, `POST /logout`, `GET /user`, `GET /dashboard`, `GET/POST /categories`, `GET/POST /bank-accounts`, `GET/POST /members`, `GET /transactions`, `GET/PUT /church/profile`, `GET /give/{slug}`, `POST /give/{slug}/initialize`, `GET /give/transaction/{reference}`, and `GET /give/receipt/{reference}`.

If your existing Laravel API uses different paths or response keys, change only `src/lib/api.ts` and the small response mappings in the pages.

## Important
Your Laravel API must enable CORS for the React app and return JSON. For authenticated routes, the frontend expects a bearer token in `token` or `access_token`.


## Laravel API integration
See `LARAVEL_API_SETUP.md` and the `laravel-api/` folder. The API controllers were generated from the uploaded Laravel Controllers.zip so the React frontend can consume JSON endpoints instead of Blade redirects/views.
