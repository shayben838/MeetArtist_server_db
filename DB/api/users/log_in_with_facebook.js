const connection = require("../../config_db");

const Procedure = "CALL sign_in_api(?)" 

function logInWithFacebook(email) {
    return new Promise((resolv, reject) => {
        connection.query(Procedure,email, (error, result) => {
            if (error) {
                reject(error)
            }
            resolv(result[0]);
        })
    })
}
module.exports = logInWithFacebook;