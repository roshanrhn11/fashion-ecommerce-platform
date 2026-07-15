FROM php:8.3-apache

# Apache configurations-ஐ மாற்றுதல் மற்றும் தேவையான Extensions இன்ஸ்டால் செய்தல்
RUN apt-get update && apt-get install -y \
    unzip git curl libzip-dev libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql pdo_mysql zip \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists/*

# Apache-ன் டிஃபால்ட் பப்ளிக் ஃபோல்டரை லாராவெல் 'public' ஃபோல்டருக்கு மாற்றுதல்
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf

# Apache போர்ட்டை Render கொடுக்கும் $PORT-க்கு டைனமிக்காக மாற்றுதல்
RUN sed -i 's/Listen 80/Listen ${PORT}/g' /etc/apache2/ports.conf
RUN sed -i 's/<VirtualHost \*:80>/<VirtualHost \*:${PORT}>/g' /etc/apache2/sites-available/*.conf

WORKDIR /var/www/html
COPY . .

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader

RUN chmod -R 775 storage bootstrap/cache
RUN chown -R www-data:www-data storage bootstrap/cache

# Apache சர்வரை ஃபோர்கிரவுண்டில் இயக்குகிறோம்
CMD ["apache2-foreground"]