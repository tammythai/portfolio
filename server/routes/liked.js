const express = require("express");
const router = express.Router();
const spotifyApi = require("../app");
const mockData = require("../data/likedSamples.json");

router.get("/", function (req, res, next) {
  // spotifyApi.getMySavedTracks({ limit: 10 }).then(
  //   (data) => res.send(data.body),
  //   (err) => console.log("Cannot get liked songs", err)
  // );
  res.send(mockData);
});

module.exports = router;
