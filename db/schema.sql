### Schema

CREATE DATABASE cupcake_db;
USE cupcake_db;

CREATE TABLE cupcakes
(
	id int NOT NULL AUTO_INCREMENT,
	cupcake_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
