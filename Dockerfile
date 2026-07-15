FROM php:8.3-cli

WORKDIR /var/www/html

# PostgreSQL மற்றும் தேவையான சிஸ்டம் டிரைவர்களை இன்ஸ்டால் செய்தல்
RUN apt-get update && apt-get install -y \
    git \
    curl \
    unzip \
    zip \
    libzip-dev \
    libpq-dev \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pgsql pdo_mysql zip \
    && rm -rf /var/lib/apt/lists/*

COPY . .

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader

EXPOSE 8000

# சர்வர் தொடங்கும் முன் மைக்ரேஷன் மற்றும் கேச் கிளியர் செய்யும் கட்டளை
CMD sh -c "php artisan migrate --force && php artisan config:clear && php artisan serve --host 0.0.0.0 --port 8000"