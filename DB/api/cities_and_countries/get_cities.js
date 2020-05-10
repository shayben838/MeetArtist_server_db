const connection = require("../../config_db");

function get_cities() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM cities; `, (error, results, fields) => {
            if (error){
                console.log("@@@@@@@@@2", error)
                reject(error)
            }
            console.log("sucsses")
            resolve(results);
        });
    })
}
module.exports = get_cities;