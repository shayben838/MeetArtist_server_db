const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'shayben838',
    database: 'meet_artist'
});

module.exports = connection;