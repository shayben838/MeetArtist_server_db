const connection = require("../../config_db");

function get_genre() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM genre; `, (error, results, fields) => {
            if (error){
                reject(error)
            }
            resolve(results);
        });
    })
}
module.exports = get_genre;