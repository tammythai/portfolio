import React, { useEffect, useState } from "react";
import { getPlaylist } from "../utilities/api";
import ListDisplay from "./ListDisplay";
import PlaylistHeader from "./PlaylistHeader";

function Playlist(props) {
  const playlistId = props.playlistId;
  const [playlist, setPlaylist] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    let mounted = true;
    getPlaylist(playlistId).then((playlistData) => {
      if (mounted) {
        setPlaylist(playlistData.playlist);
        setTracks(playlistData.tracks);
        console.log(playlistData.playlist);
      }
    });
    return () => {
      mounted = false;
    };
  }, [playlistId]);

  return (
    <div>
      <PlaylistHeader playlistInfo={playlist} />
      <ListDisplay tracks={tracks} />
    </div>
  );
}

export default Playlist;
