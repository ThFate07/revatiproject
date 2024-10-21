const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',       // Change to your host
    user: 'root',            // Change to your MySQL user
    password: 'password',    // Change to your MySQL password
    database: 'mydatabase'   // Change to your MySQL database
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = db;
