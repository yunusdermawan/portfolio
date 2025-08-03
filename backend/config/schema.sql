CREATE TABLE `users` (
	`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`name` VARCHAR(255),
	`job_headline` ENUM('Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'Red Team/Offensive Security', 'Blue Team/Defensive Security'),
	`profile_pict` VARCHAR(255),
	`bio` VARCHAR(255),
	`location` VARCHAR(255),
	`email` VARCHAR(255),
	PRIMARY KEY(`id`)
);


CREATE TABLE `skills` (
	`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`name` VARCHAR(255),
	`icon_url` VARCHAR(255),
	`category` ENUM('Frontend', 'Backend', 'Fullstack', 'Red Team/Offensive Security', 'Blue Team/Defensive Security'),
	PRIMARY KEY(`id`)
);


CREATE TABLE `user_skills` (
	`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`user_id` INTEGER,
	`skill_id` INTEGER,
	`level` ENUM('Beginner', 'Intermediate', 'Advanced/Expert'),
	PRIMARY KEY(`id`)
);


CREATE TABLE `experiences` (
	`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`user_id` INTEGER,
	`company` VARCHAR(255),
	`role` VARCHAR(255),
	`start_date` DATE,
	`end_date` DATE,
	`description` VARCHAR(255),
	`logo_url` VARCHAR(255),
	PRIMARY KEY(`id`)
);


CREATE TABLE `educations` (
	`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`user_id` INTEGER,
	`school` VARCHAR(255),
	`degree` VARCHAR(255),
	`major` VARCHAR(255),
	`start_year` YEAR,
	`end_year` YEAR,
	`description` VARCHAR(255),
	`document_url` VARCHAR(255),
	PRIMARY KEY(`id`)
);


CREATE TABLE `certifications` (
	`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`user_id` INTEGER,
	`title` VARCHAR(255),
	`issuer` VARCHAR(255),
	`issue_date` VARCHAR(255),
	`cert_url` VARCHAR(255),
	PRIMARY KEY(`id`)
);


CREATE TABLE `social_Links` (
	`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`user_id` INTEGER,
	`platform` VARCHAR(255),
	`url` VARCHAR(255),
	`icon_url` VARCHAR(255),
	PRIMARY KEY(`id`)
);


CREATE TABLE `projects` (
	`id` INTEGER NOT NULL AUTO_INCREMENT UNIQUE,
	`user_id` INTEGER,
	`title` VARCHAR(255),
	`description` VARCHAR(255),
	`tech_stack` VARCHAR(255),
	`repo_url` VARCHAR(255),
	`live_url` VARCHAR(255),
	`image_url` VARCHAR(255),
	`start_date` DATE,
	`end_date` DATE,
	`is_featured` BOOLEAN,
	PRIMARY KEY(`id`)
);


ALTER TABLE `certifications`
ADD FOREIGN KEY(`user_id`) REFERENCES `users`(`id`)
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE `social_Links`
ADD FOREIGN KEY(`user_id`) REFERENCES `users`(`id`)
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE `educations`
ADD FOREIGN KEY(`user_id`) REFERENCES `users`(`id`)
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE `user_skills`
ADD FOREIGN KEY(`user_id`) REFERENCES `users`(`id`)
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE `user_skills`
ADD FOREIGN KEY(`skill_id`) REFERENCES `skills`(`id`)
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE `experiences`
ADD FOREIGN KEY(`user_id`) REFERENCES `users`(`id`)
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE `projects`
ADD FOREIGN KEY(`user_id`) REFERENCES `users`(`id`)
ON UPDATE CASCADE ON DELETE CASCADE;