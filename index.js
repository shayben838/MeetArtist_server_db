const express = require("express");
const router = express.Router();

const get_all_users = require("./DB/api/users/get_all_users");

// ALL USERS
router.get("/", function (req, res, next) {
  res.status(200).json({ h: "h" });
});

// ALL USERS
// router.get('/', function (req, res, next) {
//   get_all_users()
//       .then(result => res.status(200).json({ h:"h" }))
//       .catch(error => res.status(500).json({ error: error.message }))
// });

module.exports = router;
