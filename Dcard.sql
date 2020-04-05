-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.7-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for dcard_db
DROP DATABASE IF EXISTS `dcard_db`;
CREATE DATABASE IF NOT EXISTS `dcard_db` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `dcard_db`;

-- Dumping structure for table dcard_db.ip_record
DROP TABLE IF EXISTS `ip_record`;
CREATE TABLE IF NOT EXISTS `ip_record` (
  `ip` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `times` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Keep the ip accessing records of the past one hour';

-- Dumping data for table dcard_db.ip_record: ~5 rows (approximately)
/*!40000 ALTER TABLE `ip_record` DISABLE KEYS */;
INSERT INTO `ip_record` (`ip`, `times`) VALUES
	('::ffff:127.0.0.1', 3);
/*!40000 ALTER TABLE `ip_record` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
