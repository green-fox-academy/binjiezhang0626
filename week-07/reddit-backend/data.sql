USE reddit;
SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

CREATE TABLE IF NOT EXISTS `posts` (
 `id` int(8) UNSIGNED NOT NULL AUTO_INCREMENT,
 `title` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `url` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `timestamp` bigint NOT NULL DEFAULT 0,
 `score` int(8) NOT NULL DEFAULT 0,
 PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

-- INSERT INTO `posts` ( `title`, `url`, `timestamp`, `score`) VALUES
-- ( "Dear JavaScript", "http://9gag.com", 1494339525, 791),
-- ( "Crockford", "http://9gag.com", 1494138425, 567);

