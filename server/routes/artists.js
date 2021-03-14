const express = require("express");
const router = express.Router();
const spotifyApi = require("../app");

router.get("/", function (req, res, next) {
  spotifyApi.getMyTopArtists({ limit: 10 }).then(
    (data) => res.send(data.body),
    (err) => console.log("Cannot get top artists", err)
  );
});

module.exports = router;
