DROP DATABASE IF EXISTS greatbay;
CREATE DATABASE greatbay;
USE DATABASE greatbay;

CREATE TABLE auction_items(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(40) NOT NULL,
    -- op VARCHAR(40) NOT NULL,
    -- curr_winner VARCHAR(40) NOT NULL,
    start_price INT NOT NULL, 
    curr_price INT NOT NULL,
    PRIMARY KEY(id)
);
