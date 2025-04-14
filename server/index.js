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
		const { id, assigned_staff, location_id, start_time, end_time } = req.body;

		const newBooking = await pool.query("INSER INTO schedule (id, assigned_staff, location_id, start_time, end_time) VALUES($1, $2, $3, $4, $5, $6)",
			[id, assigned_staff, location_id, start_time, end_time]
		)

		res.json(newBooking);
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