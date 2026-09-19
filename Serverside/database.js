const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'Tejas',
  password: 'Tejas@082003',
  database: 'classroom'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

module.exports = db;