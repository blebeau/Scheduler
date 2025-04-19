CREATE DATABASE scheduler;

CREATE TABLE staff(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(255),
	last_name VARCHAR(255),
	staff_role VARCHAR(255),
	email VARCHAR(255),
	phone_number VARCHAR(255)
);

CREATE TABLE locations(
	id SERIAL PRIMARY KEY,
	location_name VARCHAR(255),
)

CREATE TABLE schedule(
	schedule_id SERIAL PRIMARY KEY,
	assigned_staff INT REFERENCES staff(id),
	location_id INT REFERENCES locations(id),
	start_time TIMESTAMP,
	end_time TIMESTAMP,
)