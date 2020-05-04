const connection = require("../../config_db");


function all_users_by_likes(arrUsers) {
    console.log("@@ all_users_by_likes ")
    let allUsersHaveLike = []
    if(arrUsers.length>0){
        const allUsers =  arrUsers.forEach(element => {
            allUsersHaveLike.push(element.user_id)
        });
    }
    else{
        allUsersHaveLike.push(1)
    }
    return new Promise((resolve, reject) => {
       connection.query(`select * from users where id in (${allUsersHaveLike}) `, (error, results, fields) => {
            if (error) {
                reject(error)
            }
            resolve(results);
        });
    })
}
module.exports = all_users_by_likes;