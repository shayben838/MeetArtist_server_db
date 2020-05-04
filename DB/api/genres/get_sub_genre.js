const connection = require("../../config_db");

function get_sub_genre() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM sub_genre; `, (error, results, fields) => {
            if (error){
                reject(error)
            }
            resolve(results);
        });
    })
}
module.exports = get_sub_genre;