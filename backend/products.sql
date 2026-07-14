-- MySQL dump 10.13  Distrib 8.4.10, for Linux (x86_64)
--
-- Host: localhost    Database: stylecart
-- ------------------------------------------------------
-- Server version	8.4.10

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stock` int NOT NULL DEFAULT '0',
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (67,'Classic Black T Shirt','Men',2500.00,NULL,'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:19','2026-07-13 00:32:19'),(68,'Blue Denim Shirt','Men',4500.00,NULL,'https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:19','2026-07-13 00:32:19'),(69,'Slim Fit Jeans','Men',5500.00,NULL,'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:19','2026-07-13 00:32:19'),(71,'Casual Hoodie','Men',6000.00,NULL,'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:19','2026-07-13 00:32:19'),(72,'Leather Jacket','Men',12000.00,NULL,'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:19','2026-07-13 00:32:19'),(73,'Cargo Pants','Men',5000.00,NULL,'https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:19','2026-07-13 00:32:19'),(74,'Sports T Shirt','Men',3000.00,NULL,'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:19','2026-07-13 00:32:19'),(75,'Chino Pants','Men',4500.00,NULL,'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:19','2026-07-13 00:32:19'),(76,'Winter Sweater','Men',7000.00,NULL,'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:19','2026-07-13 00:32:19'),(77,'Floral Summer Dress','Women',6500.00,NULL,'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:19','2026-07-13 00:32:19'),(78,'Women Casual Blouse','Women',3500.00,NULL,'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:19','2026-07-13 00:32:19'),(79,'High Waist Jeans','Women',5000.00,NULL,'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:19','2026-07-13 00:32:19'),(80,'Elegant Long Dress','Women',9000.00,NULL,'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:19','2026-07-13 00:32:19'),(82,'Crop Top','Women',3000.00,NULL,'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:19','2026-07-13 00:32:19'),(83,'Office Blazer','Women',8500.00,NULL,'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:19','2026-07-13 00:32:19'),(84,'Pleated Skirt','Women',4500.00,NULL,'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:19','2026-07-13 00:32:19'),(86,'Silk Scarf','Women',2500.00,NULL,'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=600&auto=format&fit=crop',10,1,'2026-07-13 00:32:20','2026-07-13 00:40:48'),(87,'Kids Cotton T Shirt','Kids',2000.00,NULL,'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=600&auto=format&fit=crop',8,1,'2026-07-13 00:32:20','2026-07-13 00:40:59'),(88,'Kids Denim Jeans','Kids',3500.00,NULL,'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:20','2026-07-13 00:32:20'),(89,'Kids Hoodie','Kids',4000.00,NULL,'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',7,1,'2026-07-13 00:32:20','2026-07-13 00:41:10'),(90,'Kids Summer Dress','Kids',4500.00,NULL,'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:20','2026-07-13 00:32:20'),(91,'Kids Sports Wear Set','Kids',3500.00,NULL,'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:20','2026-07-13 00:32:20'),(92,'Kids Jacket','Kids',5000.00,NULL,'https://images.unsplash.com/photo-1611428813653-aa606c998586?q=80&w=600&auto=format&fit=crop',5,1,'2026-07-13 00:32:20','2026-07-13 00:41:23'),(95,'Kids Sweater','Kids',4500.00,NULL,'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:20','2026-07-13 00:32:20'),(96,'Kids Party Outfit','Kids',6000.00,NULL,'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop',0,1,'2026-07-13 00:32:20','2026-07-13 00:32:20');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-14  9:17:50
