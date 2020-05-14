const connection = require("../../config_db");

const Procedure = "CALL add_like(?,?)" 

function post_like({ user_id,from_user_id }) {
    return new Promise((resolve, reject) => {
        const params = [user_id,from_user_id];
        connection.query(Procedure, params, (error, results, fields) => {
            if (!results) {console.log("NO RESULT :::: ", results)}
            else {
                resolve(results);}})})
}
module.exports = post_like;
















// const connection = require("../../config_db");

// const Procedure = "CALL get_single_user(?)" 

// function post_like({ user_id,from_user_id }) {
//     console.log( user_id,from_user_id )
//     return new Promise((resolve, reject) => {
//         const params = [user_id,from_user_id];
//         connection.query('insert into likes (user_id,from_user_id) VALUES (?,?)', params, (error, results, fields) => {
//             if (!results) {console.log("NO RESULT :::: ", results)}
//             else {
//                 console.log("HAVE RESULT :::: ", results,"ERROE \N",error )
//                 resolve(results);}})})
// }
// module.exports = post_like;