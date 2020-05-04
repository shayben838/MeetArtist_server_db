const connection = require("../../config_db");

function get_countries() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM countries; `, (error, results, fields) => {
            if (error){
                reject(error)
            }
            resolve(results);
        });
    })
}
module.exports = get_countries;