FROM php:8.3-apache

WORKDIR /var/www/html

# PostgreSQL-க்கான மிக முக்கியமான libpq-dev மற்றும் தேவையான டூல்ஸ்களை இன்ஸ்டால் செய்கிறோம்
RUN apt-get update && apt-get install -y \
    git \
    curl \
    unzip \
    zip \
    libzip-dev \
    libpq-dev \
    && docker-php-ext-install \
        pdo \
        pdo_pgsql \
        pgsql \
        pdo_mysql \
        zip \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists/*

# பில்ட் ஆகும் போதே PostgreSQL டிரைவர் இருக்கிறதா என்று உறுதி செய்கிறோம்
RUN php -m | grep -E "pgsql|pdo_pgsql"

# Apache பப்ளிக் டைரக்டரி கான்ஃபிகரேஷன்
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri \
    -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' \
    /etc/apache2/sites-available/*.conf \
    /etc/apache2/apache2.conf

# Apache போர்ட்டை 80-ல் பிக்ஸ் செய்கிறோம்
RUN sed -i 's/Listen .*/Listen 80/g' /etc/apache2/ports.conf
RUN sed -i 's/<VirtualHost \*:.*/<VirtualHost \*:80>/g' /etc/apache2/sites-available/*.conf

COPY . .

# Composer மற்றும் ஆப்டிமைசேஷன்
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader

# லாராவெல் கேச் நினைவகங்களைச் சுத்தம் செய்தல்
RUN chmod -R 775 storage bootstrap/cache
RUN chown -R www-data:www-data storage bootstrap/cache

EXPOSE 80
CMD ["apache2-foreground"]