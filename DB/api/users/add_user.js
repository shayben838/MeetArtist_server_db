const connection = require("../../config_db");
const bcrypt = require("bcryptjs");

const Procedure = "CALL add_new_user(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)" 



async function add_user({ role_id, display_name, email, password, age, headline, city_id, country_id, profession, studio, genre, sub_genre, booking, sound_cloud, you_tube, profile_image }) {
    console.log("#######  ",{ role_id, display_name, email, password, age, headline, city_id, country_id, profession, studio, genre, sub_genre, booking, sound_cloud, you_tube, profile_image })
    
    // GENERATE hash password
    let passwordHash
    const hasPassword = async () => {
        const salt = await bcrypt.genSalt(10)
        passwordHash = await bcrypt.hash(password, salt)
    }
    await hasPassword();

    return new Promise((resolve, reject) => {
        const params = [role_id, display_name, email, passwordHash, age, headline, city_id, country_id, profession, studio, genre, sub_genre, booking, sound_cloud, you_tube, profile_image];
        // DO NOT TOUCH
         connection.query(Procedure, params, (error, results, fields) => {
            if (!results) {
                console.log("@@ error occurd when try to add new user")
                console.log(error)
                resolve("false")
            }
            else {
                console.log("@@ user add succesfuly")
                const userId = results.insertId;
                resolve(userId);
            }
        })
    })
}
module.exports = add_user;























// DO NOT TOCHE!
// BEFORE STORED Procedure

// !
// !


// const connection = require("../../config_db");
// const bcrypt = require("bcryptjs");

// async function add_user({ role_id, display_name, email, password, age, headline, city_id, country_id, profession, studio, genre, sub_genre, booking, sound_cloud, you_tube, profile_image }) {
//     // GENERATE hash password
//     let passwordHash
//     const hasPassword = async () => {
//         const salt = await bcrypt.genSalt(10)
//         passwordHash = await bcrypt.hash(password, salt)
//     }
//     await hasPassword();

//     return new Promise((resolve, reject) => {
//         const params = [role_id, display_name, email, passwordHash, age, headline, city_id, country_id, profession, studio, genre, sub_genre, booking, sound_cloud, you_tube, profile_image];
//         // DO NOT TOUCH
//          connection.query('insert into users (role_id, display_name, email, password, age,headline, city_id, country_id, professions, studio,genre_id,sub_genre_id,booking,sound_cloud,you_tube ,profile_image) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', params, (error, results, fields) => {
//             if (!results) {
//                 resolve("false")
//             }
//             else {
//                 const userId = results.insertId;
//                 resolve(userId);
//             }
//         })
//     })
// }
// module.exports = add_user;