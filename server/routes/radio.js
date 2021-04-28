const express = require("express");
const router = express.Router();
const spotifyApi = require("..");
const mockData = require("../data/radioSample.json");

router.get("/", function (req, res, next) {
  spotifyApi.getMyRecentlyPlayedTracks({ limit: 10 }).then(
    (data) => res.send(data.body),
    (err) => console.log("Cannot get recently played tracks", err)
  );
  // res.send(mockData);
});

module.exports = router;
