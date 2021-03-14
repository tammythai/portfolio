const express = require("express");
const cors = require("cors");
const pino = require("express-pino-logger")();
const SpotifyWebApi = require("spotify-web-api-node");

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;

const spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URI,
});

module.exports = spotifyApi;

const loginRouter = require("./routes/login");
const callbackRouter = require("./routes/callback");
const radioRouter = require("./routes/radio");
const likedSongsRouter = require("./routes/liked");
const albumsRouter = require("./routes/albums");
const artistsRouter = require("./routes/artists");

const app = express();
app
  .use(express.static(__dirname + "/public"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cors())
  .use(pino);

app
  .use("/login", loginRouter)
  .use("/callback", callbackRouter)
  .use("/api/radio", radioRouter)
  .use("/api/liked-songs", likedSongsRouter)
  .use("/api/artists", artistsRouter)
  .use("/api/albums", albumsRouter);

app.get("/api/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.json([
    {
      id: 1,
      username: "samsepi0l",
    },
    {
      id: 2,
      username: "D0loresH4ze",
    },
  ]);
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
