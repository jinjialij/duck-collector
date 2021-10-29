CREATE SCHEMA IF NOT EXISTS  formdata ;
USE formdata;

CREATE TABLE location (
  id BIGINT NOT NULL AUTO_INCREMENT,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(45) NOT NULL,
  state VARCHAR(45) NOT NULL,
  country VARCHAR(45) NULL,
  postcode VARCHAR(11) NULL,
  PRIMARY KEY (id)
);
  
  
CREATE TABLE duckform (
    id BIGINT NOT NULL AUTO_INCREMENT,
    record_datetime DATETIME NOT NULL,
    duck_num INT NOT NULL,
    food VARCHAR(255) NOT NULL,
    food_volume DECIMAL(65,3) NOT NULL,
    food_unit VARCHAR(11) NOT NULL,
    locationId BIGINT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT locationId
    FOREIGN KEY (locationId)
        REFERENCES location (id)
);