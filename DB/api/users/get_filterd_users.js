const connection = require("../../config_db");
const Builder = require("../builders/users_builder");


function get_filterd_users({id,display_name,full_name,genre_id,sub_genre_id,professions,studio,booking,minAge,maxAge,country_id,city_id,first_name,last_name,email,password,phone,role_id,description,created_on,sound_cloud,you_tube,profile_image}) {
    return new Promise((resolve,reject) => {
        try {
            const {query, params} = Builder.allUsers()
                .id(id)
                .full_name(full_name)
                .display_name(display_name)
                .genre_id(genre_id)
                .sub_genre_id(sub_genre_id)
                .professions(professions)
                .studio(studio)
                .booking(booking)
                .age(minAge,maxAge)
                .country_id(country_id)
                .city_id(city_id)
                .email(email)
                .password(password)
                .phone(phone)
                .role_id(role_id)
                .description(description)
                .created_on(created_on)
                .sound_cloud(sound_cloud)
                .you_tube(you_tube)
                .profile_image(profile_image)
                .build();
            connection.query(query, params, (error, result, fields) => {
                if (error) {
                    reject(error);
                    return
                }
                resolve(result)
            })
        }catch (e) {
            console.log(e)
        }
    })

}

module.exports = get_filterd_users;