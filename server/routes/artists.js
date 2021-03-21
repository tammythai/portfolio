const express = require("express");
const router = express.Router();
const spotifyApi = require("../app");
const mockData = require("../data/artistsSample.json");

router.get("/", function (req, res, next) {
  // spotifyApi.getMyTopArtists({ limit: 10 }).then(
  //   (data) => res.send(data.body),
  //   (err) => console.log("Cannot get top artists", err)
  // );
  res.send(mockData);
});

module.exports = router;
