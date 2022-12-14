-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2022 at 11:08 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yoga form`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--

CREATE TABLE `user_info` (
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_name` text NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_age` int(2) NOT NULL,
  `date_of_registration` date NOT NULL DEFAULT current_timestamp(),
  `payment_status` varchar(2) NOT NULL,
  `batch` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`user_id`, `user_name`, `user_email`, `user_age`, `date_of_registration`, `payment_status`, `batch`) VALUES
(13, 'Pawan Kalyan', 'pk@pmail.com', 45, '2022-12-14', '1', 'B4'),
(14, 'Ram Charan', 'rc@rrr.com', 36, '2022-12-14', '1', 'B1'),
(17, 'Damon S', 'ds@dmail.com', 40, '2022-12-14', '1', 'B4'),
(19, 'Ajad Reddy', 'ajad@gmail.com', 22, '2022-12-14', '0', 'B4'),
(21, 'Vamsi Sarma', 'vs@vmail.com', 21, '2022-12-14', '0', 'B2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_id` (`user_id`),
  ADD UNIQUE KEY `user_email` (`user_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_info`
--
ALTER TABLE `user_info`
  MODIFY `user_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
