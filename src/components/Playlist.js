import React, { useEffect, useState } from "react";
import { getPlaylist } from "../utilities/api";
import ListDisplay from "./ListDisplay";
import PlaylistHeader from "./PlaylistHeader";

function Playlist(props) {
  const playlistId = props.playlistId;
  const [playlist, setPlaylist] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getPlaylist(playlistId).then((playlist) => {
      setPlaylist(playlist.playlist);
      setTracks(playlist.tracks);
      console.log(playlist.playlist);
      console.log(playlist.playlist.images);
    });
  }, [playlist, tracks]);

  return (
    <div>
      <PlaylistHeader playlistInfo={playlist} />

      <ListDisplay tracks={tracks} />
    </div>
  );
}

export default Playlist;
