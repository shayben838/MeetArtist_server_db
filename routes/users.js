const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const get_all_users = require("../DB/api/users/get_all_users");
const getSingleUser = require("../DB/api/users/get_single_user");
const add_user = require("../DB/api/users/add_user");
const logIn = require("../DB/api/users/log_in");
const get_filterd_users = require("../DB/api/users/get_filterd_users");
const update_profile = require("../DB/api/users/update_user");
const post_like = require("../DB/api/users/post_like");
const get_all_likes_done_by_user = require("../DB/api/users/get_all_likes_done_by_user");
const remove_like_by_the_user = require("../DB/api/users/remove_like_by_the_user");
const all_users_by_likes = require("../DB/api/users/all_users_by_likes")
const logInWithFacebook = require("../DB/api/users/log_in_with_facebook");

// AUTH
const checkAuth = require("./chek_auth_jwt")

// UPLOAD NEW USER
const multer = require("multer");
let time = Date.now();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/User')
    },
    filename: function (req, file, cb) {
        cb(null, "profile_image_" + time + '_' + file.originalname)
    }
});
const upload = multer({ storage: storage });



// ALL USERS
router.get('/', function (req, res, next) {
    get_all_users()
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({ error: error.message }))
});

// FILTER
router.get('/filter', function (req, res, next) {
    get_filterd_users(req.query)
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({ error: error.message }))
});
// SINGLE USER
router.get("/singleUser", function (req, res, next) {
    getSingleUser(req.query.id)
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({ error: error.message }))
})

// UPLOAD NEW USER WITH IMAGE
router.post('/upload_user', upload.single('main_image'), async function (req, res, next) {
    try {
        let main_image = req.file.filename;
        const profile_image = "images/user/" + main_image;
        const role_id = "1"
        
        const { display_name, email, password, age, headline, city_id, country_id, profession, studio, genre, sub_genre, booking, sound_cloud, you_tube } = req.body;
        const userId = await add_user({ role_id, display_name, email, password, age, headline, city_id, country_id, profession, studio, genre, sub_genre, booking, sound_cloud, you_tube, profile_image });
        
        //ADD IMAGES
        // await add_images(userId, req.files);
        res.status(200).json({ userId: userId })
    } catch (err) {
        res.status(400).json({ user: "false" })
    }
});

// UPLOAD NEW USER NO IMAGES
router.post('/upload_user_no_image', async function (req, res, next) {
    try {        
        const role_id = "1"
        const { display_name, email, password, age, headline, city_id, country_id, profession, studio, genre, sub_genre, booking, sound_cloud, you_tube } = req.body;
        const profile_image="null"
        const userId = await add_user({ role_id, display_name, email, password, age, headline, city_id, country_id, profession, studio, genre, sub_genre, booking, sound_cloud, you_tube, profile_image });
        res.status(200).json({ userId: userId })
    } catch (err) {
        res.status(400).json({ user: "false" })
    }
});



// UPDATE PROFILE
router.put("/update_profile", function (req, res, next) {
    update_profile(req.body)
        .then(result => res.status(200).json({ result: result }))
        .catch(error => res.status(300).json({ error: error.message }))
})

// FACEBOOK / GOOGLE -  LOG IN 
router.post("/log_in_with_facebook", function (req, res, next) {
    const { email } = req.body;
    logInWithFacebook(email)
        .then(result => {
            if (result.length > 0) {
                // JWT
        const token = jwt.sign({
            email: result[0].email,
            id: result[0].id
        }, "JWT_MEET_ARTIST",
            { expiresIn: "1h" }
        );
        // TOKEN COOKIE
        res.cookie("MeetArtist_user", JSON.stringify({token:token,email:result[0].email}), { maxAge: 1000 * 60 * 60 * 24 * 7 });
                res.status(200).json({ result, token: token })
            } else { res.status(200).json({ error: "user not found" }) }
        })
        .catch(error => res(200).json({ error: "S" }))
});

// LOG IN
router.post("/log_in", async function (req, res, next) {
    const { email, password } = req.body;
    const result = await logIn(email, password)
    if (result.length > 0) {
        // JWT
        const token = jwt.sign({
            email: result[0].email,
            id: result[0].id
        }, "JWT_MEET_ARTIST",
            { expiresIn: "1h" }
        );
        // TOKEN COOKIE
        // res.cookie("MeetArtist_user", JSON.stringify({token:token,email:result[0].email}), { maxAge: 1000 * 60 * 60 * 24 * 7 });


        
        // FROM HERE TO BOOTOM DO NOT TOUCH !
        // res.cookie("MeetArtist_user", JSON.stringify(result[0].email), { maxAge: 1000 * 60 * 60 * 24 * 7 });
        res.status(200).json({ result, token: token })
    }
    else { res.status(200).json({ error: "user not found" }) }
});

//  COOKIE LOG IN
router.post("/cookie_log_in",checkAuth, async function (req, res, next) {
    const { email } = req.body;
    const justEmail = email.email
    let result;
    if (email){
        result = await get_filterd_users({ email:email })
        // result = await get_filterd_users({ email:justEmail })

    if (result.length > 0) {

        res.status(200).json({ result })
    }}
    else { res.status(200).json({ error: "user not found" }) }
});

// POST LIKE
router.post('/post_like', async function (req, res, next) {
    try {
        const result = await post_like(req.body)
        res.status(200).json({ result: result })
    } catch (err) {
        console.log(err)
        res.status(200).json({ result: "false" })
    }
});

// GET ALL THE LIKES THE USER DONE
//  GET ALL THE USERS WHICE THE USER MAKE TO THAM LIKE.
router.get('/get_all_likes_by_user', async function (req, res, next) {
    try {
        const result = await get_all_likes_done_by_user(req.query)
        const allUsers = await all_users_by_likes(result)
        res.status(200).json({ result: result, allUsers: allUsers })
    } catch (err) {
        console.log(err)
        res.status(200).json({ result: "false" })
    }
});
// GET ALL THE LIKES THE USER DONE IF THE USER DOSENT LOGED IN;
router.get('/get_all_likes_by_user_DOSENT_LOGED', async function (req, res, next) {
    try {
        const result = await get_all_likes_done_by_user(req.query)
        res.status(200).json({ result: result, allUsers: [] })
    } catch (err) {
        console.log(err)
        res.status(200).json({ result: "false" })
    }
});

// REMOVE LIKE BY USER
router.put('/remove_like_by_user', async function (req, res, next) {
    try {
        const result = await remove_like_by_the_user(req.query)
        const allUsers = result.array.forEach(element => {
        });
        res.status(200).json({ result: result })
    } catch (err) {
        console.log(err)
        res.status(200).json({ result: "false" })
    }
});






module.exports = router;
