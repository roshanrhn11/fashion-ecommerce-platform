FROM php:8.3-apache

WORKDIR /var/www/html

# Cache Buster: பில்ட் கேச்சை முழுமையாக உடைக்க ஒரு தற்காலிக வேரியபிள்
ENV REBUILD_DATE=2026-07-15

# தேவையான டூல்ஸ் மற்றும் PostgreSQL டிரைவர்களை இன்ஸ்டால் செய்தல்
RUN apt-get update && apt-get install -y \
    git \
    curl \
    unzip \
    zip \
    libzip-dev \
    libpq-dev \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pgsql pdo_mysql zip \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists/*

# Apache கான்ஃபிகரேஷன்
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf

RUN sed -i 's/Listen .*/Listen 80/g' /etc/apache2/ports.conf
RUN sed -i 's/<VirtualHost \*:.*/<VirtualHost \*:80>/g' /etc/apache2/sites-available/*.conf

COPY . .

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader

RUN chmod -R 775 storage bootstrap/cache
RUN chown -R www-data:www-data storage bootstrap/cache

EXPOSE 80
CMD ["apache2-foreground"]