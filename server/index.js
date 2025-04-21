const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Create new schedule
app.post("/book_schedule", async (req, res) => {
	console.log('req.body', req.body)
	try {
		const { schedule_id, assigned_staff, location_id, start_time, end_time } = req.body;

		const newBooking = await pool.query("INSERT INTO schedule (schedule_id, assigned_staff, location_id, start_time, end_time) VALUES($1, $2, $3, $4, $5)",
			[schedule_id, assigned_staff, location_id, start_time, end_time]
		)

		res.json(newBooking);
	} catch (err) {
		console.log('err', err)
	}
})
// add staff
app.post("/add_staff", async (req, res) => {
	console.log('req.body', req.body)
	try {
		const { id, first_name, last_name, staff_role, email, phone_number } = req.body;

		const newStaff = await pool.query("INSERT INTO staff (id, first_name, last_name, staff_role, email, phone_number) VALUES($1, $2, $3, $4, $5, $6)",
			[id, first_name, last_name, staff_role, email, phone_number]
		)

		res.json(newStaff);
	} catch (err) {
		console.log('err', err)
	}
})

// Add location
app.post("/add_location", async (req, res) => {
	console.log('req.body', req.body)
	try {
		const { id, location_name } = req.body;

		const newLocation = await pool.query("INSERT INTO locations (id, location_name) VALUES($1, $2)",
			[id, location_name]
		)

		res.json(newLocation);
	} catch (err) {
		console.log('err', err)
	}
})


// Get all staff

// Get all locations

// Get all staff at specific location

// Get staffs schedule




app.listen(5000, () => {
	console.log("server start");
});