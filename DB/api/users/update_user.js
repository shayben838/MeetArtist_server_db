const connection = require("../../config_db");

const Procedure = "CALL update_user_profile(?,?,?,?,?,?,?,?,?,?,?,?,?)" 

function update_profile({id,display_name,genre_id,sub_genre_id,professions,studio,booking,age,country_id,city_id,headline,sound_cloud,you_tube}) {    
    return new Promise((resolve, reject) => {
        const params = [id,display_name, genre_id, sub_genre_id, professions, studio, booking, age, country_id ,city_id, headline, sound_cloud, you_tube];
            connection.query(Procedure, params, (error, results, fields) => {
            if (error) {console.log("@",error)}
            if (!results) {resolve("error");}
            else {
                resolve("sucsses")
                }          
        })
    })

}

module.exports = update_profile;














// DO NOT TOCHE



// const connection = require("../../config_db");

// // const Procedure = "CALL update_user_profile(?)" 

// function update_profile({id,display_name,genre_id,sub_genre_id,professions,studio,booking,age,country_id,city_id,headline,sound_cloud,you_tube}) {    
//     return new Promise((resolve, reject) => {
//         const sql =`UPDATE users
//         SET display_name = ?, genre_id = ?, sub_genre_id = ? , professions = ? ,studio = ?, booking = ?, age = ? ,country_id = ? , city_id= ?, headline =? ,sound_cloud=?, you_tube=?
//         WHERE id = ?`;

//         const params = [display_name, genre_id, sub_genre_id, professions, studio, booking, age, country_id ,city_id, headline, sound_cloud, you_tube,id];
//             connection.query(sql, params, (error, results, fields) => {
//             if (error) {console.log("@",error)}
//             if (!results) {resolve("error");}
//             else {resolve("sucsses");}          
//         })
//     })

// }

// module.exports = update_profile;