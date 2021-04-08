import React, { useEffect, useState } from "react";
import { getLikedTracks } from "../utilities/api";
import ListDisplay from "../components/ListDisplay";

function LikedSongs() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    let mounted = true;
    getLikedTracks().then((tracks) => {
      if (mounted) {
        setTracks(tracks);
      }
    });
    return () => {
      mounted = false;
    };
  }, [JSON.stringify(tracks)]);

  return (
    <div>
      <h1 className="player-title">Liked Songs</h1>
      <h2 className="player-description">My 10 most recently liked tracks</h2>
      <ListDisplay tracks={tracks} />
    </div>
  );
}

export default LikedSongs;
