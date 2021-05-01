const express = require("express");
const cors = require("cors");
const pino = require("express-pino-logger")();
const SpotifyWebApi = require("spotify-web-api-node");

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;
const PORT = process.env.PORT || 3001;

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
const artistsRouter = require("./routes/artists");
const albumsRouter = require("./routes/albums");
const playlistsRouter = require("./routes/playlists");

const app = express();
app
  // .use(express.static(__dirname + "/public"))
  .use(express.static(__dirname + "../build"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cors())
  .use(pino);

app
  .use("/login", loginRouter)
  .use("/callback", callbackRouter)
  .use("/api/radio", radioRouter)
  .use("/api/liked-songs", likedSongsRouter)
  .use("/api/albums", albumsRouter)
  .use("/api/artists", artistsRouter)
  .use("/api/playlists", playlistsRouter);

app.get("*", (req, res) => {
  res.sendFile(express.static(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => {
  console.log("Express server is running on localhost:3001");
});
