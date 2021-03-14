const express = require("express");
const router = express.Router();
const spotifyApi = require("../app");

router.get("/", function (req, res, next) {
  spotifyApi.getMySavedTracks({ limit: 10 }).then(
    (data) => res.send(data.body),
    (err) => console.log("Cannot get liked songs", err)
  );
});

module.exports = router;
