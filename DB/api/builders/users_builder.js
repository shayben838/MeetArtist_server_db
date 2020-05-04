class UsersBuilder {
    constructor() {
        this.query = "select * from users where 1 ";
        this.params = []
    }


    id(id) {
        if (id) {
            this.params.push(id);
            this.query += "and id =?"
        }
        return this
    }
    
    display_name(display_name) {
        if (display_name) {
            this.params.push(display_name);
            this.query += "and id = ?"
        }
        return this
    }

    full_name(full_name) {
        if (full_name) {
            this.params.push(full_name);
            this.query += "and id = ?"
        }
        return this
    }
    genre_id(genre_id) {
        if (genre_id) {
            this.params.push(genre_id);
            this.query += " and genre_id = ? "
        }
        return this
    }

    sub_genre_id(sub_genre_id) {
        if (sub_genre_id) {
            this.params.push(sub_genre_id);
            this.query += "and sub_genre_id = ? "
        }
        return this
    }
    professions(professions) {
        if (professions) {
            this.params.push(professions);
            this.query += "and professions = ? "
        }
        return this
    }
    studio(studio) {
        if (studio) {
            this.params.push(studio);
            this.query += "and studio = ? "
        }
        return this
    }
    booking(booking) {
        if (booking) {
            this.params.push(booking);
            this.query += "and booking = ? "
        }
        return this
    }
    age(minAge,maxAge) {
        if (minAge && maxAge) {
            this.params.push(minAge, maxAge);
            this.query += " and age >= ? and age <= ? "
        }
        else if (maxAge) {
            this.params.push(maxAge);
            this.query += " and age <= ? "
        }
        else if (minAge) {
            this.params.push(minAge);
            this.query += " and age >= ? "
        }
        return this
    }

    country_id(country_id) {
        if (country_id) {
            this.params.push(country_id);
            this.query += "and country_id = ? "
        }
        return this
    }
    city_id(city_id) {
        if (city_id) {
            this.params.push(city_id);
            this.query += "and city_id = ? "
        }
        return this
    }
    first_name(first_name) {
        if (first_name) {
            this.params.push(first_name);
            this.query += "and first_name = ? "
        }
        return this
    }
    last_name(last_name) {
        if (last_name) {
            this.params.push(last_name);
            this.query += "and last_name = ? "
        }
        return this
    }
    email(email) {
        if (email) {
            this.params.push(email);
            this.query += "and email = ? "
        }
        return this
    }
    last_name(last_name) {
        if (last_name) {
            this.params.push(last_name);
            this.query += "and last_name = ? "
        }
        return this
    }
    password(password) {
        if (password) {
            this.params.push(password);
            this.query += "and password = ? "
        }
        return this
    }
    phone(phone) {
        if (phone) {
            this.params.push(phone);
            this.query += "and phone = ? "
        }
        return this
    }
    role_id(role_id) {
        if (role_id) {
            this.params.push(role_id);
            this.query += "and role_id = ? "
        }
        return this
    }
    description(description) {
        if (description) {
            this.params.push(description);
            this.query += "and description = ? "
        }
        return this
    }
    created_on(created_on) {
        if (created_on) {
            this.params.push(created_on);
            this.query += "and created_on = ? "
        }
        return this
    }
    sound_cloud(sound_cloud) {
        if (sound_cloud) {
            this.params.push(sound_cloud);
            this.query += "and sound_cloud = ? "
        }
        return this
    }
    you_tube(you_tube) {
        if (you_tube) {
            this.params.push(you_tube);
            this.query += "and you_tube = ? "
        }
        return this
    }
    profile_image(profile_image) {
        if (profile_image) {
            this.params.push(profile_image);
            this.query += "and profile_image = ? "
        }
        return this
    }

    build() {
        return { query: this.query, params: this.params }
    }
}

class Builder {
    static allUsers() {
        return new UsersBuilder()
    }
}
module.exports = Builder;