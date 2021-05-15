const mysql = require("mysql2");

let dbConfig = {
  host: "127.0.0.1",
  user: "root",
  password: "admin",
  port: "3306",
  database: "groupomania_db",
  multipleStatements: true,
};

let connection = mysql.createConnection(dbConfig);

connection.connect(function(err) {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL Database.");
});

module.exports = connection;
