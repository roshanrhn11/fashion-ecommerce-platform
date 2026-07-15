FROM php:8.3-apache

# PostgreSQL-க்கான libpq-dev மற்றும் தேவையான டூல்ஸ்களை இன்ஸ்டால் செய்கிறோம்
RUN apt-get update && apt-get install -y \
    unzip git curl libzip-dev libpq-dev \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pdo_mysql zip \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists/*

# Apache-ன் டிஃபால்ட் பப்ளிக் ஃபோல்டரை லாராவெல் 'public' ஃபோல்டருக்கு மாற்றுதல்
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf

# Apache-ஐ அதன் டிஃபால்ட் போர்ட் 80-லேயே இயங்க வைக்கிறோம்
RUN sed -i 's/Listen .*/Listen 80/g' /etc/apache2/ports.conf
RUN sed -i 's/<VirtualHost \*:.*/<VirtualHost \*:80>/g' /etc/apache2/sites-available/*.conf

WORKDIR /var/www/html
COPY . .

# Composer இன்ஸ்டால் செய்தல்
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader

# லாராவெல் ஃபோல்டர் பெர்மிஷன்களைச் சரிசெய்தல்
RUN chmod -R 775 storage bootstrap/cache
RUN chown -R www-data:www-data storage bootstrap/cache

EXPOSE 80
CMD ["apache2-foreground"]