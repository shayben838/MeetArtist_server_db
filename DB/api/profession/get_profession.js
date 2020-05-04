const connection = require("../../config_db");

function get_profession() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM professions; `, (error, results, fields) => {
            if (error){
                reject(error)
            }
            resolve(results);
        });
    })
}
module.exports = get_profession;