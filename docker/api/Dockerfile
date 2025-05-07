FROM php:8.3-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    zip \
    unzip \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && docker-php-ext-install pdo_mysql zip mbstring exif pcntl

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Set permissions (for Laravel storage/cache logs)
RUN chown -R www-data:www-data /var/www \
    && chmod -R 755 /var/www

EXPOSE 8080

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]
