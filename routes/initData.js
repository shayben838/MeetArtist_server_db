const express = require("express");
const router = express.Router();

// TEST
const get_cities = require("../DB/api/cities_and_countries/get_cities");
const get_countries = require("../DB/api/cities_and_countries/get_countries");
const get_all_users = require("../DB/api/users/get_all_users");
const get_genre = require("../DB/api/genres/get_genre");
const get_sub_genre = require("../DB/api/genres/get_sub_genre");
const get_profession = require("../DB/api/profession/get_profession");

router.get("/", function (req, res) {
  const cities = get_cities();
  const countries = get_countries();
  const users = get_all_users();
  const genre = get_genre();
  const sub_genre = get_sub_genre();
  const profession = get_profession();
  try {
    Promise.all([cities, countries, users, genre, sub_genre, profession]).then(
      (values) => {
        res.status(200).json({
          cities: values[0],
          countries: values[1],
          users: values[2],
          genre: values[3],
          sub_genre: values[4],
          profession: values[5],
        });
      }
    );
  } catch (e) {
    console.error(e);
    res.status(200).json({ h: "h" });
  }
});

module.exports = router;
