1. npm install
2. npm run dev (while developing) || npm run build (on prod/staging/build)
3. php composer install
4. cp .env.example .env
5. In .env edit connection database
6. php artisan key:generate
7. php artisan migrate --seed
8. php artisan queue:work