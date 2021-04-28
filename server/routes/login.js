const express = require("express");
const router = express.Router();
const spotifyApi = require("..");
const scopes = [
  "user-read-recently-played",
  "user-library-read",
  "user-top-read",
];

router.get("/", function (req, res) {
  res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

module.exports = router;
