// const mysql = require('mysql');

// const db_config = {
//     host: 'us-cdbr-east-06.cleardb.net',
//     user: 'bf41c42b19f6ea',
//     password: '9147af7f',
//     database: 'heroku_65ed7343bb0cf12'
// };




// // let connection;
// let connection;


// function handleDisconnect() {
//     connection = mysql.createConnection(db_config); // Recreate the connection, since
//     // the old one cannot be reused.

//     connection.connect(function (err) {              // The server is either down
//         if (err) {                                     // or restarting (takes a while sometimes).
//             console.log('#$ error when connecting to db:', err);
//             setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//         }                                     // to avoid a hot loop, and to allow our node script to
//     });                                     // process asynchronous requests in the meantime.
//     // If you're also serving http, display a 503 error.
//     connection.on('#$ error', function (err) {
//         console.log('#$ db error', err);
//         if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//             console.log("1234567890 THE ERROR WASE : PROTOCOL_CONNECTION_LOST")
//             handleDisconnect();                         // lost due to either server restart, or a
//         } else {                                      // connnection idle timeout (the wait_timeout
//             throw err;                                  // server variable configures this)
//         }
//     });
// }

// handleDisconnect();

// module.exports = connection;

















































const mysql = require('mysql');

const connection = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bf41c42b19f6ea',
    password: '9147af7f',
    database: 'heroku_65ed7343bb0cf12'
});

module.exports = connection;