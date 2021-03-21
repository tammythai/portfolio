const express = require("express");
const router = express.Router();
const spotifyApi = require("../app");
const mockData = require("../data/albumsSample.json");

router.get("/", function (req, res, next) {
  // spotifyApi.getMyTopTracks({ limit: 10 }).then(
  //   (data) => res.send(data.body),
  //   (err) => console.log("Cannot get top albums", err)
  // );
  res.send(mockData);
});

module.exports = router;
