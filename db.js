const mysql = require("mysql2");

// Create a connection to the database
const db = mysql.createConnection({
  host: "localhost", // Replace with your database host (e.g., 127.0.0.1)
  user: "root", // Replace with your MySQL username
  password: "MySQL@2024$Root", // Replace with your MySQL password
  database: "school_management", // Replace with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
    return;
  }
  console.log("Connected to the MySQL database!");
});

module.exports = db;
