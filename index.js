const express = require('express');
const router = express.Router();

const get_all_users = require("./DB/api/users/get_all_users");



const TestData = {
  first_name: "Shay",
  family_name: "Ben Shimol",
  age: 25,
  booking: "zenon records",
  country: "israel",
  city: "tel aviv",
  links: {
    sound_cloud: "https://soundcloud.com/6emgjzuy19cj",
    you_tube: "https://www.youtube.com/watch?v=xGC99a8hF48&list=RDxGC99a8hF48&start_radio=1",
    beat_port: "https://www.beatport.com/search?q=astrix"
  },
  main_music_style: "psy trance",
  music_styles: ["psy", "thecno", "chillout", "zenon"],
  title: "producer",
  studio: "home",
  description: "i make music in my home and search about new stuff",
  email: "shayben838@gmail.com"
}

/* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log("SHAYYYYYYY WHY???");
//   res.status(200).json(TestData)
//   // res.render('index', { title: 'Shay back end' });

// });

// ALL USERS
router.get('/', function (req, res, next) {

  res.status(200).json({ h: "h" })

});

// ALL USERS
// router.get('/', function (req, res, next) {
//   get_all_users()
//       .then(result => res.status(200).json({ h:"h" }))
//       .catch(error => res.status(500).json({ error: error.message }))
// });

module.exports = router;
