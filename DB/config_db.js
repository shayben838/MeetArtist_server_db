const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bf41c42b19f6ea',
    password: '9147af7f',
    database: 'heroku_65ed7343bb0cf12'
});

module.exports = connection;