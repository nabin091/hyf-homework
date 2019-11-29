-- CREATE DATABASE meal;
 USE meal;
 
 CREATE TABLE `meal`(
        `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
        `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        `description` text  COLLATE utf8mb4_unicode_ci,
        `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
		`when` date NOT NULL,
        `max_reservation` int(10) unsigned NOT NULL,
        `price` decimal not null,
        `created_date` date NOT NULL,
        PRIMARY KEY (`id`)
        ) ENGINE=InnoDB AUTO_INCREMENT = 8 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `reservation`(
	   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
       `number_of_guests` int(10) NOT NULL,
       `meal_id` int(10) unsigned,
       `created_date` date NOT NULL,
       PRIMARY KEY (`id`),
	   CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
       ) ENGINE=InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

CREATE TABLE `review`(
        `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
        `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        `description` text COLLATE utf8mb4_unicode_ci,
        `meal_id` int(10) unsigned,
        `stars` int (10) NULL DEFAULT NULL,
        `created_date` date NOT NULL,
        PRIMARY KEY (`id`),
        CONSTRAINT `fk_meal1` FOREIGN KEY (`meal_id`)REFERENCES `meal` (`id`) ON DELETE CASCADE
        ) ENGINE=InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
        
	