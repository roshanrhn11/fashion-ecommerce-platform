# 🛍️ StyleCart - Full Stack Fashion E-Commerce Platform

![Laravel](https://img.shields.io/badge/Laravel-12-red)
![React](https://img.shields.io/badge/React.js-Frontend-blue)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)
![MySQL](https://img.shields.io/badge/MySQL-8.4-blue)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED)
![REST API](https://img.shields.io/badge/API-REST-green)
![Sanctum](https://img.shields.io/badge/Auth-Laravel%20Sanctum-orange)
![GitHub](https://img.shields.io/badge/GitHub-Version%20Control-black)

StyleCart is an enterprise-grade full-stack fashion e-commerce web platform designed for luxury and modern clothing brands. It is built using **Laravel 12, React.js, Vite, Tailwind CSS, MySQL 8.4, RESTful APIs, Laravel Sanctum Token Authentication, Docker, and Docker Engine**.

The system provides a seamless digital shopping ecosystem featuring modern customer browsing, shopping cart state management, checkout with cash-on-delivery, automated Gmail SMTP order confirmation emails, and a secure role-based administrative dashboard.

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Docker Architecture & Containerization](#-docker-architecture--containerization)
- [Technology Stack](#-technology-stack)
- [Database Design & Schema](#-database-design--schema)
- [Project Directory Structure](#-project-directory-structure)
- [Installation & Setup Guide (Docker)](#-installation--setup-guide-docker)
- [Authentication & Role-Based Access Control](#-authentication--role-based-access-control)
- [API Endpoints Documentation](#-api-endpoints-documentation)
- [Order & Email Confirmation Workflow](#-order--email-confirmation-workflow)
- [Development & Docker Commands](#-development--docker-commands)
- [Testing & Verification](#-testing--verification)
- [Future Roadmap](#-future-roadmap)
- [Key Learning Outcomes](#-key-learning-outcomes)
- [Author & License](#-author--license)

---

## 📌 Project Overview

StyleCart transitions traditional e-commerce paradigms into a containerized microservice-friendly client-server architecture. 

By separating the **React.js single-page frontend application (SPA)** from the **Laravel RESTful API backend**, StyleCart guarantees lightning-fast client interactions, modular extensibility, robust token security, and hassle-free containerized deployment via Docker Engine.

### Key Highlights
- **Decoupled Architecture**: Independent React UI connected via Axios to Laravel REST API.
- **Dockerized Environment**: Zero local dependency conflicts using Docker Desktop and Compose.
- **Real-Time Notification System**: Synchronous Gmail SMTP triggers for instant HTML order receipts.
- **Ultra-Sleek Noir UI Theme**: Minimalist luxury brand aesthetics powered by Tailwind CSS.

---

## 🚀 Key Features

### 👤 Customer Features
- **User Authentication**: Secure Registration, Login, Token Storage, and Session Management via Laravel Sanctum.
- **Catalog Browsing**: Dynamic grid layout featuring luxury hover zoom effects and price tag displays.
- **Category Filtering**: Browse items by categories (*Men, Women, Kids, New Arrivals, Offers*).
- **Shopping Cart Management**: Client-side state persistence for adding, updating quantities, and removing cart items.
- **Seamless Checkout**: Address collection form linked directly to order state creation.
- **Instant Email Confirmation**: Automatic HTML transaction receipt sent directly to customer Gmail inbox.
- **Order Tracking**: Customer dashboard to review historical order statuses.

### 👨‍💼 Admin Features
- **Role-Based Access Control (RBAC)**: Restricted administrative routes enforcing strictly validated privileges (`role = admin`).
- **Product Management (CRUD)**: Create, Read, Update, and Delete products with multi-format image upload support.
- **Inventory Management**: Track stock levels and pricing updates across all categories.
- **Order Management**: Monitor customer orders in real-time and update order fulfillment status (*Pending, Confirmed, Packed, Delivered, Cancelled*).

---

## 🏗️ System Architecture

```
                      +-----------------------------+
                      |    React.js SPA Frontend    |
                      |  (Vite + Tailwind CSS UI)   |
                      +--------------+--------------+
                                     |
                                Axios REST API
                                (JSON Payload)
                                     |
                      +--------------v--------------+
                      |     Laravel 12 Backend      |
                      |   (Sanctum + Mail Engine)   |
                      +--------------+--------------+
                                     |
                         +-----------+-----------+
                         |                       |
                Eloquent Database ORM       Gmail SMTP Server
                         |                       |
            +------------v------------+  +-------v-------+
            | MySQL 8.4 Database Container|  | Customer Inbox|
            +-------------------------+  +---------------+
```

---

## 🐳 Docker Architecture & Containerization

StyleCart uses Docker containers to unify development, eliminate local machine differences, and streamline deployment.

```
+-----------------------------------------------------------------------+
|                           Docker Engine                               |
|                                                                       |
|  +------------------------+  +-------------------+  +--------------+  |
|  |   stylecart_backend    |  |  stylecart_mysql  |  | stylecart_   |  |
|  |  (PHP 8.3 + Laravel 12)|  |    (MySQL 8.4)    |  | phpmyadmin   |  |
|  |       Port: 8000       |  |     Port: 3307    |  |  Port: 8080  |  |
|  +-----------+------------+  +---------+---------+  +------+-------+  |
|              |                         |                   |          |
|              +--- Docker Network bridge <------------------+          |
+-----------------------------------------------------------------------+
```

### Containers Breakdown
1. **`stylecart_backend`**: PHP 8.3 CLI container running Laravel 12 REST API on Port `8000`.
2. **`stylecart_mysql`**: MySQL 8.4 Relational Database container listening on host port `3307` (internal `3306`).
3. **`stylecart_phpmyadmin`**: Web interface for MySQL database inspection accessible at `http://localhost:8080`.

---

## 🛠️ Technology Stack

| Category | Technology / Library | Description |
| :--- | :--- | :--- |
| **Frontend UI** | **React 18** | Client-side UI Rendering & Component State Management |
| **Build Tool** | **Vite** | Next-generation frontend bundling tool |
| **Styling** | **Tailwind CSS v4** | Utility-first CSS framework for custom luxury dark theme |
| **HTTP Client** | **Axios** | Asynchronous promise-based API request handler |
| **Routing** | **React Router DOM v6** | Client-side dynamic routing engine |
| **Backend API** | **Laravel 12** | Enterprise PHP Framework providing REST Endpoints |
| **Authentication**| **Laravel Sanctum** | Lightweight bearer token-based API authentication |
| **Database** | **MySQL 8.4** | High-performance relational database storage |
| **DevOps** | **Docker & Docker Compose** | Container management and environment orchestration |
| **Database Tool** | **phpMyAdmin** | Graphical Web DB Management Tool |
| **Email Service** | **Gmail SMTP / TLS** | Transactional Mailer for receipt dispatching |

---

## 🗄️ Database Design & Schema

### `users`
| Column | Type | Constraints / Attributes |
| :--- | :--- | :--- |
| `id` | BigInteger | Primary Key, Auto Increment |
| `name` | String | Required |
| `email` | String | Unique, Required |
| `password` | String | Hashed (Bcrypt) |
| `role` | String | Default: `'customer'` (`'admin'` for management) |
| `timestamps` | Timestamp | `created_at`, `updated_at` |

### `products`
| Column | Type | Constraints / Attributes |
| :--- | :--- | :--- |
| `id` | BigInteger | Primary Key, Auto Increment |
| `name` | String | Required |
| `category` | String | E.g., `Men`, `Women`, `Kids`, `Offers` |
| `price` | Decimal(10,2) | Required |
| `stock` | Integer | Inventory count |
| `description` | Text | Nullable |
| `image` | String | File path in `storage/app/public/products` |
| `timestamps` | Timestamp | `created_at`, `updated_at` |

### `orders`
| Column | Type | Constraints / Attributes |
| :--- | :--- | :--- |
| `id` | BigInteger | Primary Key, Auto Increment |
| `reference` | String | E.g., `ORD-000042` |
| `user_id` | BigInteger | Foreign Key -> `users.id` (Nullable for guest checkout) |
| `customer_name`| String | Required |
| `email` | String | Required for order receipt dispatch |
| `phone` | String | Delivery contact |
| `address` | Text | Full delivery location |
| `total` | Decimal(10,2) | Order grand total |
| `status` | String | Default: `'Pending'` |
| `items` | JSON / Text | Serialized cart array |
| `timestamps` | Timestamp | `created_at`, `updated_at` |

---

## 📂 Project Directory Structure

```
StyleCart/
├── backend/                        # Laravel 12 REST API Server
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/API/
│   │   │   │   ├── AuthController.php
│   │   │   │   ├── ProductController.php
│   │   │   │   └── OrderController.php
│   │   │   └── Middleware/
│   │   ├── Mail/
│   │   │   └── OrderConfirmationMail.php
│   │   └── Models/
│   │       ├── User.php
│   │       ├── Product.php
│   │       └── Order.php
│   ├── config/
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   ├── resources/
│   │   └── views/
│   │       └── emails/
│   │           └── order_confirmation.blade.php
│   ├── routes/
│   │   ├── api.php
│   │   └── web.php
│   ├── storage/
│   ├── docker-compose.yml
│   ├── Dockerfile
│   └── .env
│
└── frontend/                       # React.js Frontend Application
    ├── src/
    │   ├── api/
    │   │   └── axios.js            # Base Axios Instance with Interceptors
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   └── Footer.jsx
    │   ├── context/
    │   │   ├── AuthContext.jsx
    │   │   └── CartContext.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Products.jsx
    │   │   ├── ProductDetail.jsx
    │   │   ├── Cart.jsx
    │   │   ├── Checkout.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   └── AdminDashboard.jsx
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    ├── vite.config.js
    └── tailwind.config.js
```

---

## ⚡ Installation & Setup Guide (Docker)

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed & running.
- [Node.js](https://nodejs.org/) (v18+) & [Git](https://git-scm.com/).

### Step 1: Clone Repository
```bash
git clone [https://github.com/your-username/stylecart-ecommerce.git](https://github.com/your-username/stylecart-ecommerce.git)
cd stylecart-ecommerce
```

### Step 2: Environment Configuration (Backend)
Navigate to the `backend` directory and set up `.env`:
```bash
cd backend
cp .env.example .env
```

Ensure your `.env` contains the correct Docker database and Gmail SMTP credentials:
```env
APP_NAME=StyleCart
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=clothing_shop
DB_USERNAME=root
DB_PASSWORD=password

MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-16-digit-app-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=your-email@gmail.com
MAIL_FROM_NAME="StyleCart"
```

### Step 3: Launch Docker Containers
From the `backend` folder, start all services via Docker Compose:
```bash
docker-compose up -d --build
```

### Step 4: Run Database Migrations & Generate Key
Execute commands inside the running Laravel container (`stylecart_backend`):
```bash
docker exec -it stylecart_backend php artisan key:generate
docker exec -it stylecart_backend php artisan migrate
docker exec -it stylecart_backend php artisan storage:link
docker exec -it stylecart_backend php artisan config:clear
```

### Step 5: Setup & Start React Frontend
In a new terminal window, navigate to the `frontend` folder:
```bash
cd frontend
npm install
npm run dev
```

The application will be accessible at:
- **React Frontend Application**: `http://localhost:5173`
- **Laravel REST API Backend**: `http://localhost:8000/api`
- **phpMyAdmin DB Portal**: `http://localhost:8080`

---

## 🔒 Authentication & Role-Based Access Control

StyleCart uses **Laravel Sanctum** for SPA token management and security.

```
  Customer / Admin                       React Frontend                       Laravel API
         |                                     |                                   |
         | --- (Login Credentials POST) ------>|                                   |
         |                                     | ------- (POST /api/login) ------->|
         |                                     |                                   | (Validates Hash)
         |                                     |<-- (200 OK + Sanctum Bearer Token)|
         |                                     |                                   |
         |                                  Stores in                              |
         |                                LocalStorage                             |
         |                                     |                                   |
         | --- (Protected Action Requests) --->|                                   |
         |                                     | -- (Headers: Authorization) ------>|
         |                                     |   "Bearer <sanctum_token>"        | (Validates Token &
         |                                     |                                   |  Role = 'admin')
```

### Assigning Admin Privileges
To convert a registered user into an Administrator, execute Laravel Tinker in Docker:
```bash
docker exec -it stylecart_backend php artisan tinker
```
Inside Tinker prompt:
```php
$user = User::where('email', 'admin@stylecart.com')->first();
$user->role = 'admin';
$user->save();
exit;
```

---

## 📑 API Endpoints Documentation

### 🔓 Public Endpoints

| Method | Endpoint | Description | Payload Example / Notes |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/register` | Register new user account | `{ "name": "Roshan", "email": "user@gmail.com", "password": "secretpassword" }` |
| `POST` | `/api/login` | Authenticate user & issue token | `{ "email": "user@gmail.com", "password": "secretpassword" }` |
| `GET` | `/api/products` | Fetch all products for catalog | Returns JSON array of products |
| `GET` | `/api/products/{id}` | Get detailed product info | Returns single product details |
| `POST` | `/api/orders` | Submit guest / customer checkout | Creates order & triggers Gmail SMTP receipt |

### 🔒 Protected Endpoints (Requires `Authorization: Bearer <token>`)

| Method | Endpoint | Middleware / Access | Description |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/logout` | `auth:sanctum` | Revokes current access token |
| `GET` | `/api/user` | `auth:sanctum` | Retrieves logged-in user profile |
| `POST` | `/api/admin/products` | `auth:sanctum`, `admin` | Add a new product to store |
| `PUT` | `/api/admin/products/{id}`| `auth:sanctum`, `admin` | Update product details or stock |
| `DELETE`| `/api/admin/products/{id}`| `auth:sanctum`, `admin` | Remove product from inventory |
| `GET` | `/api/admin/orders` | `auth:sanctum`, `admin` | View all customer orders |
| `POST` | `/api/admin/orders/{id}/status`| `auth:sanctum`, `admin` | Update order state (*Confirmed, Delivered, etc.*) |

---

## 📧 Order & Email Confirmation Workflow

1. **Cart Submission**: Customer fills checkout details (`name`, `email`, `phone`, `address`) on React frontend.
2. **API Dispatch**: React transmits JSON payload to `/api/orders`.
3. **Database Transaction**: Laravel validates inputs and writes a new row to the `orders` MySQL table.
4. **Synchronous Mail Trigger**: `OrderController.php` fires `Mail::to($email)->send(new OrderConfirmationMail($order))`.
5. **SMTP Handshake**: Laravel negotiates TLS connection on port `587` with `smtp.gmail.com`.
6. **Receipt Delivery**: HTML formatted invoice is delivered instantly to the customer's Gmail inbox.

```html
+-------------------------------------------------------+
|                      STYLECART                        |
|             Thank You For Your Order!                 |
+-------------------------------------------------------+
| Order Reference: ORD-000042                           |
| Customer Name: Roshan Niroshan                        |
| Total Amount: Rs. 12,500.00                           |
| Payment Method: Cash on Delivery                      |
+-------------------------------------------------------+
| Items Purchased:                                      |
| - Classic Black Noir Hoodie (x1) - Rs. 7,500.00       |
| - Slim Fit Denim Jeans (x1)     - Rs. 5,000.00       |
+-------------------------------------------------------+
```

---

## 🛠️ Development & Docker Commands Reference

### Useful Commands Cheat-Sheet

| Task | Command |
| :--- | :--- |
| **Restart Backend Container** | `docker restart stylecart_backend` |
| **Clear Laravel Config Cache**| `docker exec -it stylecart_backend php artisan config:clear` |
| **Clear Laravel Route Cache** | `docker exec -it stylecart_backend php artisan route:clear` |
| **Clear Application Cache** | `docker exec -it stylecart_backend php artisan cache:clear` |
| **Inspect Laravel Error Log** | `docker exec -it stylecart_backend tail -n 50 storage/logs/laravel.log` |
| **Open Artisan Tinker Shell** | `docker exec -it stylecart_backend php artisan tinker` |
| **Stop All Containers** | `docker-compose down` |

---

## 🧪 Testing & Verification

1. **Frontend UI Test**: Navigate to `http://localhost:5173/`, add products to cart, proceed to checkout, enter email, and click **Place Order**.
2. **Database Verification**: Open phpMyAdmin at `http://localhost:8080`, select `clothing_shop` database, check `orders` table for new entries.
3. **Gmail SMTP Test**: Open target email inbox to verify reception of the order confirmation HTML email.

---

## 🛣️ Future Roadmap

- [ ] Integrated Payment Gateway (Stripe & PayPal API integration).
- [ ] Product Reviews and Star Rating system.
- [ ] Multi-currency conversion switcher.
- [ ] Real-time order fulfillment status webhooks via Pusher / WebSockets.
- [ ] Automated SMS notification updates via Twilio API.

---

## 🎓 Key Learning Outcomes

- Building decoupled client-server architecture using **Laravel REST APIs** and **React SPAs**.
- Containerizing PHP, MySQL, and management tools using **Docker & Docker Compose**.
- Implementing secure token-based authentication using **Laravel Sanctum**.
- Managing client-side global states using **React Context API**.
- Setting up transactional email automation via **Gmail SMTP**.
- Designing responsive luxury dark-mode interfaces using **Tailwind CSS**.

---

## 👤 Author & License

Developed with passion by **Pathmanathan Niroshan**.

This project is open-source and released under the [MIT License](LICENSE).
