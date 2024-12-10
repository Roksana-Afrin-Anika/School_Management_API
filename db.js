const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'sql5.freesqldatabase.com',  // Host provided
  user: 'sql5751216',               // Database user
  password: 'KETxuuEYFj',           // Database password
  database: 'sql5751216',           // Database name
  port: 3306                        // Port number
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
  } else {
    console.log("Connected to the remote database!");
  }
});


module.exports = db;
