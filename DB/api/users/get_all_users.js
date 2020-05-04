const connection = require("../../config_db");

const Procedure = "CALL get_all_users()" 

function get_all_users() {
    return new Promise((resolve, reject) => {
        connection.query(Procedure, (error, results, fields) => {
            if (error){
                reject(error)
            }
            resolve(results[0]);
        });
    })
}
module.exports = get_all_users;