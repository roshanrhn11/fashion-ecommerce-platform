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
