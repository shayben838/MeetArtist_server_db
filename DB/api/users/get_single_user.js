const connection = require("../../config_db");

const Procedure = "CALL get_single_user(?)" 

function getSingleUser(id) {
    return new Promise((resolve, reject) => {
        connection.query(Procedure,id, (error, result, fields) => {
            if (error) {
                reject(error)
            }
            resolve(result[0]);
        })
    })
}

module.exports = getSingleUser;
