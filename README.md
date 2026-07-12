# 🛍️ StyleCart - Fashion E-Commerce Platform

A modern full-stack fashion e-commerce platform built with **Laravel 12, React, MySQL, REST APIs, and Sanctum Authentication**.

StyleCart provides a complete online shopping experience with customer authentication, product management, shopping cart, checkout workflow, order management, and admin control features.

---

# 📌 Project Overview

StyleCart is a full-stack e-commerce application designed for fashion businesses to manage products, customers, and online orders.

The system contains:

- Customer shopping interface
- Secure authentication system
- Product catalogue management
- Shopping cart functionality
- Checkout and order processing
- Admin dashboard
- Order management workflow

The project follows a modern frontend and backend architecture using Laravel REST APIs with a React-based user interface.

---

# 🚀 Features

## 👤 Customer Features

✅ Customer Registration  
✅ Customer Login / Logout  
✅ Secure Token Authentication  
✅ Browse Fashion Products  
✅ Product Details View  
✅ Add Products to Cart  
✅ Update Cart Quantity  
✅ Remove Cart Items  
✅ Checkout System  
✅ Cash on Delivery  
✅ Order Confirmation Email  
✅ View Personal Orders  
✅ Track Order Status  

---

# 👨‍💼 Admin Features

✅ Separate Admin Authentication  
✅ Role-Based Access Control  
✅ Admin Dashboard  
✅ Add Products  
✅ Update Products  
✅ Delete Products  
✅ Product Image Upload  
✅ Category Management  
✅ Stock Management  
✅ View Customer Orders  
✅ Update Order Status  

---

# 🏗️ System Architecture

```
React Frontend
       |
       |
REST API Communication
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

- React.js
- Vite
- JavaScript (ES6+)
- Axios
- React Router
- CSS / Bootstrap

## Backend

- Laravel 12
- PHP 8+
- Laravel Sanctum
- REST API
- MySQL Database

## Development Tools

- Visual Studio Code
- Git & GitHub
- XAMPP
- Postman

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

## Backend Setup (Laravel)

Clone the repository:

```bash
git clone https://github.com/roshanrhn11/fashion-ecommerce-platform.git
```

Navigate to backend:

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

Configure your database in `.env`

Run migrations:

```bash
php artisan migrate
```

Start Laravel server:

```bash
php artisan serve
```

Backend runs:

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

Start React development server:

```bash
npm run dev
```

Frontend runs:

```
http://localhost:5173
```

---

# 🔐 Authentication System

The application implements secure authentication using:

- Laravel Sanctum API Tokens
- Protected API Routes
- Role-Based Authorization

User Roles:

```
Customer
    |
    |
Admin
```

---

# 🛒 Order Workflow

```
Order Placed

      ↓

Pending

      ↓

Processing

      ↓

Shipped

      ↓

Delivered
```

Customers can view their own order history while administrators can manage order status.

---

# 📸 Screenshots

Screenshots will be added here:

- Home Page
- Product Listing
- Product Details
- Shopping Cart
- Checkout
- Customer Orders
- Admin Dashboard

---

# 🔮 Future Improvements

Planned improvements:

- Online Payment Gateway
- Wishlist System
- Product Reviews & Ratings
- Advanced Search
- Product Recommendation System
- Docker Deployment
- Cloud Hosting
- Automated Testing

---

# 🧪 Testing

Future QA implementation:

- API Testing using Postman
- Unit Testing using PHPUnit
- End-to-End Testing using Playwright
- Test Case Documentation

---

# 📌 Learning Outcomes

Through this project, I gained practical experience in:

- Full Stack Web Development
- REST API Development
- Authentication & Authorization
- Database Design
- Frontend and Backend Integration
- Git Workflow
- Software Testing Concepts

---

# 👨‍💻 Author

**Pathmanathan Niroshan**

Software Engineering Student

GitHub:
https://github.com/roshanrhn11

---

# 📄 License

This project is licensed under the MIT License.
