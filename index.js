const express = require('express');
const router = express.Router();

const TestData = {
  first_name: "Shay",
  family_name: "Ben Shimol",
  age: 25,
  booking:"zenon records",
  country:"israel",
  city:"tel aviv",
  links:{
    sound_cloud:"https://soundcloud.com/6emgjzuy19cj",
    you_tube:"https://www.youtube.com/watch?v=xGC99a8hF48&list=RDxGC99a8hF48&start_radio=1",
    beat_port:"https://www.beatport.com/search?q=astrix"
  },
  main_music_style:"psy trance",
  music_styles:["psy","thecno","chillout","zenon"],
  title : "producer",
  studio:"home",
  description:"i make music in my home and search about new stuff",
  email:"shayben838@gmail.com"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("SHAYYYYYYY WHY???");
  res.status(200).json(TestData)
  // res.render('index', { title: 'Shay back end' });

});

module.exports = router;
