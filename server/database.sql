CREATE DATABASE scheduler;

CREATE TABLE staff(
	staff_id SERIAL PRIMARY KEY,
	staff_first_name VARCHAR(255),
	staff_last_name VARCHAR(255),
	staff_role VARCHAR(255),
	staff_current_location VARCHAR(255),
	staff_next_location VARCHAR(255),
)

CREATE TABLE locations(
	location_id SERIAL PRIMARY KEY,
	location_name VARCHAR(255),
	first_role_staff VARCHAR(255) FOREIGN KEY REFERENCES staff(staff_id),
	second_role_staff VARCHAR(255) FOREIGN KEY REFERENCES staff(staff_id),
	third_role_staff VARCHAR(255) FOREIGN KEY REFERENCES staff(staff_id),,
)