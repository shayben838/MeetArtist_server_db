var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const get_filterd_users = require("../DB/api/users/get_filterd_users");
const getSingleUser = require("../DB/api/users/get_single_user");
// likes
const get_all_likes_done_by_user = require("../DB/api/users/get_all_likes_done_by_user");
const all_users_by_likes = require("../DB/api/users/all_users_by_likes");

// const User = require("../models/User");

// @route   GET api/auth
// @desc    geT LOGGED IN USER
// @access  Private

router.get("/", auth, async (req, res) => {
  console.log("# ", "after auth");
  console.log("# ", req.user);
  try {
    const user = await getSingleUser(req.user.id);
    console.log("@@@@@@@@@@@@@@@", user[0].id);
    const id = user[0].id;
    const likesArr = await get_all_likes_done_by_user(id);
    const all_users_from_likes_array = await all_users_by_likes(likesArr);

    // const user = await User.findById(req.user.id).select("-password");
    res.json({
      user,
      likesArr: likesArr,
      all_users_from_likes_array: all_users_from_likes_array,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/auth
// @desc    Auth user & get token
// @access  PUBLIC
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await get_filterd_users({ email });
      console.log("---", user);

      if (!user) {
        console.log("!user");
        return res.status(400).json({ msg: "Invalid cradentials" });
      }

      const isMatch = await bcrypt.compare(password, user[0].password);
      if (!isMatch) {
        console.log("!isMatch");
        return res.status(400).json({ msg: "Invalid cradentials" });
      }
      const payload = {
        user: {
          id: user[0].id,
        },
      };
      jwt.sign(
        payload,
        process.env.JWT_TOKEN,
        // config.get("jwtSecret"),
        {
          expiresIn: 36000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error("#### ", err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
