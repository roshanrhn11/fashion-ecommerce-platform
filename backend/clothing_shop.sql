-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 14, 2026 at 08:35 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clothing_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(6, '0001_01_01_000000_create_users_table', 1),
(7, '0001_01_01_000001_create_cache_table', 1),
(8, '0001_01_01_000002_create_jobs_table', 1),
(9, '2026_05_22_182635_create_orders_table', 1),
(10, '2026_05_22_183131_create_products_table', 1),
(11, '2026_07_09_145413_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `customer_name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` text NOT NULL,
  `items` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`items`)),
  `total` decimal(10,2) NOT NULL,
  `payment_method` varchar(255) NOT NULL DEFAULT 'Cash on Delivery',
  `status` varchar(255) NOT NULL DEFAULT 'Pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `customer_name`, `phone`, `email`, `address`, `items`, `total`, `payment_method`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, 'Niroshan Pathmanathan', '0766840073', '20ict081@seu.ac.lk', 'Tulloes Estate,Udapusselawa, Nuwara Eliya 22200', '[{\"id\":3,\"name\":\"Blue Denim Shirt\",\"category\":\"Men\",\"price\":\"5500.00\",\"description\":\"Stylish blue denim shirt for daily wear.\",\"image\":\"products\\/mGXR7RNGZujbhz0nazCY2eSMxHKmrLeimPcxaHYB.jpg\",\"stock\":25,\"is_active\":1,\"created_at\":\"2026-07-12T16:37:14.000000Z\",\"updated_at\":\"2026-07-12T17:28:55.000000Z\",\"quantity\":3}]', 16500.00, 'Cash on Delivery', 'Pending', '2026-07-12 12:01:17', '2026-07-12 12:01:17'),
(2, 1, 'Pathmanathan Niroshan', '4545454545', 'roshanrhn11@gmail.com', 'Nuwara Eliya, Udapussellawa, Nuwara Eliya 44545', '[{\"id\":86,\"name\":\"Silk Scarf\",\"category\":\"Women\",\"price\":\"2500.00\",\"description\":null,\"image\":\"https:\\/\\/images.unsplash.com\\/photo-1601924994987-69e26d50dc26?q=80&w=600&auto=format&fit=crop\",\"stock\":10,\"is_active\":1,\"created_at\":\"2026-07-13T06:02:20.000000Z\",\"updated_at\":\"2026-07-13T06:10:48.000000Z\",\"quantity\":1}]', 2500.00, 'Cash on Delivery', 'Pending', '2026-07-13 00:42:22', '2026-07-13 00:42:22'),
(3, 1, 'Pathmanathan Niroshan', '45646454', 'roshanrhn11@gmail.com', 'Nuwara Eliya, Udapussellawa, Nuwara Eliya 44545', '[{\"id\":86,\"name\":\"Silk Scarf\",\"category\":\"Women\",\"price\":\"2500.00\",\"description\":null,\"image\":\"https:\\/\\/images.unsplash.com\\/photo-1601924994987-69e26d50dc26?q=80&w=600&auto=format&fit=crop\",\"stock\":10,\"is_active\":1,\"created_at\":\"2026-07-13T06:02:20.000000Z\",\"updated_at\":\"2026-07-13T06:10:48.000000Z\",\"quantity\":1}]', 2500.00, 'Cash on Delivery', 'Pending', '2026-07-13 00:44:55', '2026-07-13 00:44:55'),
(4, NULL, 'Pathmanathan Niroshan', '4545454545', 'riorhn222@gmail.com', 'Nuwara Eliya, Udapussellawa, Nuwara Eliya 44545', '[{\"id\":89,\"name\":\"Kids Hoodie\",\"category\":\"Kids\",\"price\":\"4000.00\",\"description\":null,\"image\":\"https:\\/\\/images.unsplash.com\\/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop\",\"stock\":7,\"is_active\":1,\"created_at\":\"2026-07-13T06:02:20.000000Z\",\"updated_at\":\"2026-07-13T06:11:10.000000Z\",\"quantity\":1}]', 4000.00, 'Cash on Delivery', 'Pending', '2026-07-13 00:46:15', '2026-07-13 00:46:15'),
(5, NULL, 'Niroshan Pathmanathan', '0766840073', '20ict081@seu.ac.lk', 'Tulloes Estate,Udapusselawa, Nuwara Eliya 22200', '[{\"id\":86,\"name\":\"Silk Scarf\",\"category\":\"Women\",\"price\":\"2500.00\",\"description\":null,\"image\":\"https:\\/\\/images.unsplash.com\\/photo-1601924994987-69e26d50dc26?q=80&w=600&auto=format&fit=crop\",\"stock\":10,\"is_active\":1,\"created_at\":\"2026-07-13T06:02:20.000000Z\",\"updated_at\":\"2026-07-13T06:10:48.000000Z\",\"quantity\":1}]', 2500.00, 'Cash on Delivery', 'Pending', '2026-07-13 01:23:59', '2026-07-13 01:23:59'),
(6, 2, 'Niroshan Pathmanathan', '0766840073', '20ict081@seu.ac.lk', 'Tulloes Estate,Udapusselawa, Nuwara Eliya 22200', '[{\"id\":86,\"name\":\"Silk Scarf\",\"category\":\"Women\",\"price\":\"2500.00\",\"description\":null,\"image\":\"https:\\/\\/images.unsplash.com\\/photo-1601924994987-69e26d50dc26?q=80&w=600&auto=format&fit=crop\",\"stock\":10,\"is_active\":1,\"created_at\":\"2026-07-13T06:02:20.000000Z\",\"updated_at\":\"2026-07-13T06:10:48.000000Z\",\"quantity\":1}]', 2500.00, 'Cash on Delivery', 'Pending', '2026-07-13 01:25:45', '2026-07-13 01:25:45'),
(7, NULL, 'Niroshan Pathmanathan', '0766840073', '20ict081@seu.ac.lk', 'Tulloes Estate,Udapusselawa, Nuwara Eliya 22200', '[{\"id\":86,\"name\":\"Silk Scarf\",\"category\":\"Women\",\"price\":\"2500.00\",\"description\":null,\"image\":\"https:\\/\\/images.unsplash.com\\/photo-1601924994987-69e26d50dc26?q=80&w=600&auto=format&fit=crop\",\"stock\":10,\"is_active\":1,\"created_at\":\"2026-07-13T06:02:20.000000Z\",\"updated_at\":\"2026-07-13T06:10:48.000000Z\",\"quantity\":1}]', 2500.00, 'Cash on Delivery', 'Pending', '2026-07-13 01:41:57', '2026-07-13 01:41:57'),
(8, 5, 'Roshan', '0756684125', '20ict081@seu.ac.lk', 'Nuwara Eliya , Nuwara Eliya 22200', '[{\"id\":86,\"name\":\"Silk Scarf\",\"category\":\"Women\",\"price\":\"2500.00\",\"description\":null,\"image\":\"https:\\/\\/images.unsplash.com\\/photo-1601924994987-69e26d50dc26?q=80&w=600&auto=format&fit=crop\",\"stock\":10,\"is_active\":1,\"created_at\":\"2026-07-13T06:02:20.000000Z\",\"updated_at\":\"2026-07-13T06:10:48.000000Z\",\"quantity\":1}]', 2500.00, 'Cash on Delivery', 'Pending', '2026-07-13 04:39:25', '2026-07-13 04:39:25'),
(9, 5, 'Roshan', '0756684125', 'roshanrhn77@gmail.com', 'Nuwara Eliya , Nuwara Eliya 22200', '[{\"id\":86,\"name\":\"Silk Scarf\",\"category\":\"Women\",\"price\":\"2500.00\",\"description\":null,\"image\":\"https:\\/\\/images.unsplash.com\\/photo-1601924994987-69e26d50dc26?q=80&w=600&auto=format&fit=crop\",\"stock\":10,\"is_active\":1,\"created_at\":\"2026-07-13T06:02:20.000000Z\",\"updated_at\":\"2026-07-13T06:10:48.000000Z\",\"quantity\":1}]', 2500.00, 'Cash on Delivery', 'Pending', '2026-07-13 04:46:06', '2026-07-13 04:46:06'),
(10, 5, 'roshan', '0756850747', 'roshanrhn77@gmail.com', 'Ragala ,Nuwara Eliya, Nuwara eliya 22200', '[{\"id\":86,\"name\":\"Silk Scarf\",\"category\":\"Women\",\"price\":\"2500.00\",\"description\":null,\"image\":\"https:\\/\\/images.unsplash.com\\/photo-1601924994987-69e26d50dc26?q=80&w=600&auto=format&fit=crop\",\"stock\":10,\"is_active\":1,\"created_at\":\"2026-07-13T06:02:20.000000Z\",\"updated_at\":\"2026-07-13T06:10:48.000000Z\",\"quantity\":1}]', 2500.00, 'Cash on Delivery', 'Pending', '2026-07-13 04:51:35', '2026-07-13 04:51:35'),
(11, 5, 'roshan', '0756850747', 'roshan77@gmail.com', 'Nuwara Eliya, Ragala, Nuwara Eliya 22200', '[{\"id\":86,\"name\":\"Silk Scarf\",\"category\":\"Women\",\"price\":\"2500.00\",\"description\":null,\"image\":\"https:\\/\\/images.unsplash.com\\/photo-1601924994987-69e26d50dc26?q=80&w=600&auto=format&fit=crop\",\"stock\":10,\"is_active\":1,\"created_at\":\"2026-07-13T06:02:20.000000Z\",\"updated_at\":\"2026-07-13T06:10:48.000000Z\",\"quantity\":1}]', 2500.00, 'Cash on Delivery', 'Pending', '2026-07-13 04:54:54', '2026-07-13 04:54:54'),
(12, 5, 'roshan', '0756850747', 'roshan77@gmail.com', 'Nuwara Eliya, Ragala, Nuwara Eliya 22200', '[{\"id\":86,\"name\":\"Silk Scarf\",\"category\":\"Women\",\"price\":\"2500.00\",\"description\":null,\"image\":\"https:\\/\\/images.unsplash.com\\/photo-1601924994987-69e26d50dc26?q=80&w=600&auto=format&fit=crop\",\"stock\":10,\"is_active\":1,\"created_at\":\"2026-07-13T06:02:20.000000Z\",\"updated_at\":\"2026-07-13T06:10:48.000000Z\",\"quantity\":1}]', 2500.00, 'Cash on Delivery', 'Pending', '2026-07-13 04:55:22', '2026-07-13 04:55:22'),
(13, 5, 'Niroshan Pathmanathan', '0766840073', '20ict081@seu.ac.lk', 'Tulloes Estate,Udapusselawa, Nuwara Eliya 22200', '[{\"id\":86,\"name\":\"Silk Scarf\",\"category\":\"Women\",\"price\":\"2500.00\",\"description\":null,\"image\":\"https:\\/\\/images.unsplash.com\\/photo-1601924994987-69e26d50dc26?q=80&w=600&auto=format&fit=crop\",\"stock\":10,\"is_active\":1,\"created_at\":\"2026-07-13T06:02:20.000000Z\",\"updated_at\":\"2026-07-13T06:10:48.000000Z\",\"quantity\":1}]', 2500.00, 'Cash on Delivery', 'Pending', '2026-07-13 04:55:48', '2026-07-13 04:55:48'),
(14, 5, 'Niroshan Pathmanathan', '0766840073', '20ict081@seu.ac.lk', 'Tulloes Estate,Udapusselawa, Nuwara Eliya 22200', '[{\"id\":86,\"name\":\"Silk Scarf\",\"category\":\"Women\",\"price\":\"2500.00\",\"description\":null,\"image\":\"https:\\/\\/images.unsplash.com\\/photo-1601924994987-69e26d50dc26?q=80&w=600&auto=format&fit=crop\",\"stock\":10,\"is_active\":1,\"created_at\":\"2026-07-13T06:02:20.000000Z\",\"updated_at\":\"2026-07-13T06:10:48.000000Z\",\"quantity\":1}]', 2500.00, 'Cash on Delivery', 'Pending', '2026-07-13 04:56:23', '2026-07-13 04:56:23');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'react_token', '636f875d4162ff5a50b1efa81c31bf45a48ee3f8bdc59be11dabfd7eb8358e47', '[\"*\"]', NULL, NULL, '2026-07-12 11:03:54', '2026-07-12 11:03:54'),
(2, 'App\\Models\\User', 1, 'react_token', '0ab23189bcfb80aac94b133dbaf90706029a794f453bb1e6cc650d9c08334520', '[\"*\"]', NULL, NULL, '2026-07-12 11:04:09', '2026-07-12 11:04:09'),
(3, 'App\\Models\\User', 1, 'react_token', 'e59dd24dcc335e5c5fa50b0d46caa2c9d2e79acebb42854cd2f871fed2eca18b', '[\"*\"]', NULL, NULL, '2026-07-12 11:04:59', '2026-07-12 11:04:59'),
(4, 'App\\Models\\User', 2, 'react_token', '040ddd04e6e126c230a79a46dd5c65ecf1b07bfaedbec8809d4628c2da69f50b', '[\"*\"]', NULL, NULL, '2026-07-12 12:00:36', '2026-07-12 12:00:36'),
(5, 'App\\Models\\User', 2, 'react_token', '678323ed239a9e424595fe000464e69ec9e106764dfa536995d3b61953971440', '[\"*\"]', '2026-07-12 12:01:32', NULL, '2026-07-12 12:00:55', '2026-07-12 12:01:32'),
(6, 'App\\Models\\User', 1, 'react_token', 'c47eec8c560a96bb2c070d44cb71354f230e34f26e64b668d8e9e475765bbe0c', '[\"*\"]', NULL, NULL, '2026-07-12 12:01:54', '2026-07-12 12:01:54'),
(7, 'App\\Models\\User', 3, 'react_token', '2d582a30ffb7dd82a1bd688ae08e43e00fc7dfa5573463d273b12c4b2f5e4f1a', '[\"*\"]', NULL, NULL, '2026-07-12 14:06:29', '2026-07-12 14:06:29'),
(8, 'App\\Models\\User', 3, 'react_token', 'ddea2ae50dc2886d1c3b6c137383c27c5dd5d66a21d9190b4caa42bb5f6383c4', '[\"*\"]', NULL, NULL, '2026-07-12 14:06:45', '2026-07-12 14:06:45'),
(9, 'App\\Models\\User', 1, 'react_token', 'ef977c1d7f5dd2dc4c6660f35a05adec3ab80ee857cdaf5846ad4037ce8ee5b4', '[\"*\"]', NULL, NULL, '2026-07-13 00:23:17', '2026-07-13 00:23:17'),
(10, 'App\\Models\\User', 1, 'react_token', 'ecddbc37fde010d16018ba5336b6cef12069e69c7750d14f3cec805f503b17f6', '[\"*\"]', NULL, NULL, '2026-07-13 00:34:13', '2026-07-13 00:34:13'),
(11, 'App\\Models\\User', 1, 'react_token', '8e36f17f1ab89fc5baee34b9aacb75047a6b78b044466f0c19c9acc9f79d3b02', '[\"*\"]', NULL, NULL, '2026-07-13 00:40:37', '2026-07-13 00:40:37'),
(12, 'App\\Models\\User', 1, 'react_token', '7b5b50453b084a9cb5cbf528af7211f89694cdc66704ce09114d43c12969f8fe', '[\"*\"]', '2026-07-13 00:44:55', NULL, '2026-07-13 00:41:48', '2026-07-13 00:44:55'),
(13, 'App\\Models\\User', 2, 'react_token', '84082848451a71fa9aa6e5dee20b08a018d9aad940f97213b94ded4550a2e58a', '[\"*\"]', '2026-07-13 01:25:56', NULL, '2026-07-13 01:25:30', '2026-07-13 01:25:56'),
(14, 'App\\Models\\User', 1, 'react_token', 'dc67f6996698c76b6b5ff9037cb5d3d4316b369a383898f96c287341935c7541', '[\"*\"]', NULL, NULL, '2026-07-13 01:26:57', '2026-07-13 01:26:57'),
(15, 'App\\Models\\User', 2, 'react_token', '3cd28cbd67206ee1332560331395c4c8559c48dc1540c172e260db83349d40c9', '[\"*\"]', NULL, NULL, '2026-07-13 04:30:14', '2026-07-13 04:30:14'),
(16, 'App\\Models\\User', 4, 'react_token', '91e2c5537a393de1972baeaa9c57bf3e371d2e5e5453d66ade1d03012bfadf81', '[\"*\"]', NULL, NULL, '2026-07-13 04:30:55', '2026-07-13 04:30:55'),
(17, 'App\\Models\\User', 5, 'react_token', '2c6d4507ad44965d738683b592329f5c1684a7b27ea2c87e31e282cad55ee9d3', '[\"*\"]', NULL, NULL, '2026-07-13 04:31:18', '2026-07-13 04:31:18'),
(18, 'App\\Models\\User', 5, 'react_token', 'a71e452cf96c53545e72d840675d754a42cf15029b47021648688f2941bd8d42', '[\"*\"]', '2026-07-13 04:51:35', NULL, '2026-07-13 04:32:35', '2026-07-13 04:51:35'),
(19, 'App\\Models\\User', 5, 'react_token', 'bb1b9fcacb9932d60a84e30b91ad6685a76402a14467fc6f2f5e993a008b3dac', '[\"*\"]', '2026-07-13 04:57:00', NULL, '2026-07-13 04:53:37', '2026-07-13 04:57:00');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `stock` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category`, `price`, `description`, `image`, `stock`, `is_active`, `created_at`, `updated_at`) VALUES
(67, 'Classic Black T Shirt', 'Men', 2500.00, NULL, 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:19', '2026-07-13 00:32:19'),
(68, 'Blue Denim Shirt', 'Men', 4500.00, NULL, 'https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:19', '2026-07-13 00:32:19'),
(69, 'Slim Fit Jeans', 'Men', 5500.00, NULL, 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:19', '2026-07-13 00:32:19'),
(71, 'Casual Hoodie', 'Men', 6000.00, NULL, 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:19', '2026-07-13 00:32:19'),
(72, 'Leather Jacket', 'Men', 12000.00, NULL, 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:19', '2026-07-13 00:32:19'),
(73, 'Cargo Pants', 'Men', 5000.00, NULL, 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:19', '2026-07-13 00:32:19'),
(74, 'Sports T Shirt', 'Men', 3000.00, NULL, 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:19', '2026-07-13 00:32:19'),
(75, 'Chino Pants', 'Men', 4500.00, NULL, 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:19', '2026-07-13 00:32:19'),
(76, 'Winter Sweater', 'Men', 7000.00, NULL, 'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:19', '2026-07-13 00:32:19'),
(77, 'Floral Summer Dress', 'Women', 6500.00, NULL, 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:19', '2026-07-13 00:32:19'),
(78, 'Women Casual Blouse', 'Women', 3500.00, NULL, 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:19', '2026-07-13 00:32:19'),
(79, 'High Waist Jeans', 'Women', 5000.00, NULL, 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:19', '2026-07-13 00:32:19'),
(80, 'Elegant Long Dress', 'Women', 9000.00, NULL, 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:19', '2026-07-13 00:32:19'),
(82, 'Crop Top', 'Women', 3000.00, NULL, 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:19', '2026-07-13 00:32:19'),
(83, 'Office Blazer', 'Women', 8500.00, NULL, 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:19', '2026-07-13 00:32:19'),
(84, 'Pleated Skirt', 'Women', 4500.00, NULL, 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:19', '2026-07-13 00:32:19'),
(86, 'Silk Scarf', 'Women', 2500.00, NULL, 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=600&auto=format&fit=crop', 10, 1, '2026-07-13 00:32:20', '2026-07-13 00:40:48'),
(87, 'Kids Cotton T Shirt', 'Kids', 2000.00, NULL, 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=600&auto=format&fit=crop', 8, 1, '2026-07-13 00:32:20', '2026-07-13 00:40:59'),
(88, 'Kids Denim Jeans', 'Kids', 3500.00, NULL, 'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:20', '2026-07-13 00:32:20'),
(89, 'Kids Hoodie', 'Kids', 4000.00, NULL, 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop', 7, 1, '2026-07-13 00:32:20', '2026-07-13 00:41:10'),
(90, 'Kids Summer Dress', 'Kids', 4500.00, NULL, 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:20', '2026-07-13 00:32:20'),
(91, 'Kids Sports Wear Set', 'Kids', 3500.00, NULL, 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:20', '2026-07-13 00:32:20'),
(92, 'Kids Jacket', 'Kids', 5000.00, NULL, 'https://images.unsplash.com/photo-1611428813653-aa606c998586?q=80&w=600&auto=format&fit=crop', 5, 1, '2026-07-13 00:32:20', '2026-07-13 00:41:23'),
(95, 'Kids Sweater', 'Kids', 4500.00, NULL, 'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:20', '2026-07-13 00:32:20'),
(96, 'Kids Party Outfit', 'Kids', 6000.00, NULL, 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop', 0, 1, '2026-07-13 00:32:20', '2026-07-13 00:32:20');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'jk', 'jk@mail.com', NULL, '$2y$12$kFX8szgh/Jgjk0vwiPMuvOEQ/pLV3ayYZQSe2xYrTyC5peaXa1coa', 'admin', NULL, '2026-07-12 11:03:54', '2026-07-12 23:25:26'),
(2, 'user1', 'user1@gmail.com', NULL, '$2y$12$ENHGOT5K0Aj1ceXFnqrR..9yBRRXPu/h4s/faE4n.pvWHGU9uCEjm', 'customer', NULL, '2026-07-12 12:00:36', '2026-07-12 12:00:36'),
(4, 'niro', 'niro@gmail.com', NULL, '$2y$12$.Khmn/ohzhs5x4LhXP6gR.8MAe39Z9TkZ1rq6iqZ78q21iWT5vmx2', 'admin', NULL, '2026-07-13 04:30:55', '2026-07-13 04:30:55'),
(5, 'user', 'user@gmail.com', NULL, '$2y$12$5Z6IbxfM65UeabHO85cEkOV.Y79hdCWb/q1HWmmcbkAPz4P3P/c8e', 'customer', NULL, '2026-07-13 04:31:18', '2026-07-13 04:31:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_user_id_foreign` (`user_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
