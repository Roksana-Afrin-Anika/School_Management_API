const mysql = require('mysql2');

const db = mysql.createConnection({
  host: "sql5.freesqldatabase.com", // Host from FreeSQLDatabase
  user: "sql5751204", // Your username from FreeSQLDatabase
  password: "Lovebird13#", // Your password (check your email for this)
  database: "sql5751204", // Your database name from FreeSQLDatabase
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
  } else {
    console.log("Connected to the remote database!");
  }
});


module.exports = db;
