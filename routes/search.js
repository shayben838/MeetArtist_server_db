const express = require("express");
const router = express.Router();

// init
router.get("/", function (req, res, next) {
  res.status(200).json({ s: "search" });
});

module.exports = router;
