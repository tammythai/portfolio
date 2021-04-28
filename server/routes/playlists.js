const express = require("express");
const router = express.Router();
const spotifyApi = require("..");
const mockData = require("../data/playlistSample.json");

router.get("/:playlistId", function (req, res, next) {
  spotifyApi
    .getPlaylist(req.params.playlistId, {
      fields:
        "description,id,images,name,tracks.items(added_at, track(id, name, artists, album, duration_ms))",
    })
    .then(
      (data) => res.send(data.body),
      (err) => console.log("Can't get requested playlist", err)
    );
  // res.send(mockData);
});

module.exports = router;
