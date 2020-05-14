const connection = require("../../config_db");

function remove_like_by_the_user({id}) {
    return new Promise((resolve, reject) => {
        // DELETE FROM likes WHERE id = 22
        connection.query(`DELETE FROM likes where id = ?; `,[id] ,(error, results, fields) => {
            if (error){
                reject(error)
            }
            resolve(results);
        });
    })
}
module.exports = remove_like_by_the_user;