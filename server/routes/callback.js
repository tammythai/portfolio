const express = require("express");
const router = express.Router();
const spotifyApi = require("../app");

router.get("/", function (req, res) {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const error = req.query.error || null;

  const loginResponse = (loginStatus) => {
    return {
      code: loginStatus ? 200 : 401,
      message: loginStatus ? "Login was successful." : "Login failed.",
    };
  };

  if (error) {
    console.error("Callback Error:", error);
    res.send(`Callback Error: ${error}`);
    return;
  }

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      const access_token = data.body["access_token"];
      const refresh_token = data.body["refresh_token"];
      const expires_in = data.body["expires_in"];

      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      console.log("access_token:", access_token);
      console.log("refresh_token:", refresh_token);

      console.log(
        `Sucessfully retreived access token. Expires in ${expires_in} s.`
      );
      //res.send("Success! You can now close the window.");
      // res.send(loginResponse(true));
      res.redirect("http://localhost:3000/?code=200");

      setInterval(async () => {
        const data = await spotifyApi.refreshAccessToken();
        const access_token = data.body["access_token"];

        console.log("The access token has been refreshed!");
        console.log("access_token:", access_token);
        spotifyApi.setAccessToken(access_token);
      }, (expires_in / 2) * 1000);
    })
    .catch((error) => {
      console.error("Error getting Tokens:", error);
      //res.send(`Error getting Tokens: ${error}`);
      res.send(loginResponse(false));
    });
});

module.exports = router;
