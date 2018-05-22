
DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
	id integer primary key,
	firstname VARCHAR,
	surname	VARCHAR
	);

INSERT INTO customers (firstname, surname)

values('Ali','azimi');
insert into customers (firstname,surname) values('mahsa','smith');
