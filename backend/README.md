<<<<<<< HEAD
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework. You can also check out [Laravel Learn](https://laravel.com/learn), where you will be guided through building a modern Laravel application.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
=======
# 🛍️ StyleCart - Full Stack Fashion E-Commerce Platform

A modern full-stack fashion e-commerce platform built with **Laravel 12, React.js, MySQL, REST APIs, and Laravel Sanctum Authentication**.

StyleCart provides a complete online shopping experience with customer authentication, product management, shopping cart, checkout workflow, order processing, and admin management features.

---

# 📌 Project Overview

StyleCart is a full-stack e-commerce web application designed for fashion businesses to manage products, customers, and online orders through a modern digital shopping platform.

The system provides:

* Customer shopping interface
* Secure authentication system
* Product catalogue management
* Category-based product browsing
* Shopping cart functionality
* Checkout and order processing
* Customer order tracking
* Admin product management
* Admin order management

The project follows a modern client-server architecture using:

```
React.js Frontend
        |
        |
Laravel REST API
        |
        |
MySQL Database
```

---

# 🚀 Features

## 👤 Customer Features

✅ Customer Registration
✅ Customer Login / Logout
✅ Secure Token Authentication
✅ Browse Fashion Products
✅ View Product Details
✅ Category-Based Product Filtering
✅ Add Products to Cart
✅ Update Cart Quantity
✅ Remove Cart Items
✅ Checkout System
✅ Cash on Delivery
✅ Order Creation
✅ View Personal Orders
✅ Track Order Status

---

## 👨‍💼 Admin Features

✅ Separate Admin Authentication
✅ Role-Based Authorization
✅ Admin Dashboard
✅ Add Products
✅ Update Products
✅ Delete Products
✅ Product Image Management
✅ Category Management
✅ View Customer Orders
✅ Update Order Status

---

# 🏗️ System Architecture

```
                 React.js Frontend
                        |
                        |
                 Axios REST API
                        |
                        |
                Laravel Backend API
                        |
                        |
                  MySQL Database
```

---

# 🛠️ Technology Stack

## Frontend

* React.js
* Vite
* JavaScript (ES6+)
* Axios
* React Router
* CSS
* Bootstrap

## Backend

* Laravel 12
* PHP 8+
* Laravel Sanctum
* REST API
* MySQL Database
* Laravel Eloquent ORM

## Development Tools

* Visual Studio Code
* Git & GitHub
* XAMPP
* Postman
* Chrome Developer Tools

---

# 🗄️ Database Design

Main database entities:

```
Users
 |
 |--- Products
 |
 |--- Orders
        |
        |--- Order Items
```

Database Management System:

```
MySQL
```

ORM:

```
Laravel Eloquent ORM
```

---

# 📂 Project Structure

```
fashion-ecommerce-platform/

│
├── backend/
│   ├── app/
│   ├── routes/
│   ├── database/
│   ├── resources/
│   └── composer.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── LICENSE
```

---

# ⚙️ Installation Guide

## Clone Repository

```bash
git clone https://github.com/roshanrhn11/fashion-ecommerce-platform.git
```

---

# Backend Setup (Laravel)

Navigate:

```bash
cd backend
```

Install dependencies:

```bash
composer install
```

Create environment file:

```bash
cp .env.example .env
```

Generate application key:

```bash
php artisan key:generate
```

Configure MySQL database inside `.env`

Example:

```
DB_DATABASE=stylecart
DB_USERNAME=root
DB_PASSWORD=
```

Run migrations:

```bash
php artisan migrate
```

Start Laravel server:

```bash
php artisan serve
```

Backend URL:

```
http://127.0.0.1:8000
```

---

# Frontend Setup (React)

Navigate:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Frontend URL:

```
http://localhost:5173
```

---

# 🔐 Authentication System

StyleCart uses:

* Laravel Sanctum API Token Authentication
* Protected API Routes
* Role-Based Authorization

User Roles:

```
Customer
    |
    |
Admin
```

Authentication Flow:

```
User Login
      |
      |
Laravel Authentication
      |
      |
Sanctum Token Generated
      |
      |
React Stores Token
      |
      |
Protected API Access
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| POST   | `/api/register` | Register customer |
| POST   | `/api/login`    | Login user        |
| POST   | `/api/logout`   | Logout user       |

## Products

| Method | Endpoint                    | Description    |
| ------ | --------------------------- | -------------- |
| GET    | `/api/products`             | Get products   |
| POST   | `/api/products/store`       | Create product |
| PUT    | `/api/products/{id}/update` | Update product |
| DELETE | `/api/products/{id}/delete` | Delete product |

## Orders

| Method | Endpoint                        | Description          |
| ------ | ------------------------------- | -------------------- |
| POST   | `/api/orders`                   | Create order         |
| GET    | `/api/my-orders`                | View customer orders |
| POST   | `/api/admin/orders/{id}/status` | Update order status  |

---

# 🛒 Order Workflow

```
Customer Selects Product

        ↓

Add To Cart

        ↓

Checkout

        ↓

Order Created

        ↓

Admin Reviews Order

        ↓

Order Status Updated

        ↓

Customer Tracks Order
```

---

# 📸 Screenshots

Add screenshots inside:

```
docs/screenshots/
```

Recommended screenshots:

* Home Page
* Product Collection
* Product Details
* Shopping Cart
* Checkout Page
* Customer Orders
* Admin Dashboard

Example:

```md
![Home Page](docs/screenshots/home.png)
```

---

# 🔮 Future Enhancement Proposal

## Version 2.0 Roadmap

## 💳 Online Payment Integration

Planned improvements:

* PayHere / Stripe integration
* Payment verification
* Digital receipts

## 🤖 AI Product Recommendation System

Future AI features:

* Personalized product recommendations
* User behaviour analysis
* Similar product suggestions
* Trending product prediction

## 📦 Advanced Inventory Management

Planned:

* Real-time stock tracking
* Low stock notifications
* Inventory reports

## 📊 Business Analytics Dashboard

Future dashboard:

* Sales analytics
* Revenue reports
* Customer statistics
* Product performance analysis

## ☁️ Cloud Deployment

Future deployment:

* Laravel cloud hosting
* React deployment
* Cloud database
* Cloud image storage

## 📱 Mobile Application

Future:

* Android application
* Push notifications
* Mobile shopping experience

---

# 🧪 Testing

Future testing improvements:

* API Testing using Postman
* PHPUnit Testing
* End-to-End Testing using Playwright
* Automated Test Cases

---

# 📌 Learning Outcomes

Through this project, I gained practical experience in:

* Full Stack Web Development
* REST API Development
* React and Laravel Integration
* Authentication and Authorization
* Database Design
* Git Workflow
* Software Testing Concepts
* E-Commerce System Development

---

# 👨‍💻 Author

**Pathmanathan Niroshan**

Software Engineering Student

GitHub:

https://github.com/roshanrhn11

---

# 📄 License

This project is licensed under the MIT License.
>>>>>>> 7a64c58f54bcac98a9e9ae71162c66a37b8135fb
