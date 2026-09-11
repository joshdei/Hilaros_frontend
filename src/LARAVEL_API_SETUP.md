# Hilaros React + Laravel API

## Frontend

```bash
npm install
cp .env.example .env
npm run dev
```

Set `.env`:

```env
VITE_API_URL=http://localhost:8000/api
```

## Laravel API

The `laravel-api/` folder contains API controller versions based on the uploaded Laravel controllers.

Copy:
- `laravel-api/app/Http/Controllers/Api/*` -> `app/Http/Controllers/Api/`
- `laravel-api/routes/api.php` -> merge into your existing `routes/api.php`

### Sanctum

The API uses Laravel Sanctum personal access tokens.

If Sanctum is not installed:

```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

Make sure `App\\Models\\User` uses `Laravel\\Sanctum\\HasApiTokens`.

Example:

```php
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
}
```

### CORS

Allow the React development URL in `config/cors.php`, for example:

```php
'allowed_origins' => ['http://localhost:5173'],
'allowed_methods' => ['*'],
'allowed_headers' => ['*'],
```

Then:

```bash
php artisan optimize:clear
php artisan serve
```

### Paystack callback

Add:

```env
FRONTEND_URL=http://localhost:5173
```

The API callback verifies the Paystack transaction and redirects the browser back to the React thank-you page.

## Important

The original uploaded controllers were Laravel web controllers. They returned Blade views and redirects. The API controllers in this package convert those responses into JSON and keep the business logic/database/Paystack flow on Laravel.

The React app should NEVER contain your Paystack secret key. Keep that key in Laravel `.env`.
