const Pool = require("pg").Pool;


console.log("env", process.env.port)

const pool = new Pool({
	user: process.env.USER,
	password: process.env.PASSWORD,
	host: process.env.HOST,
	port: process.env.PORT,
	database: process.env.DATABASE,
})

module.exports = pool;