import React, { useState, useEffect } from "react";
import { getRecentTracks } from "../utilities/api";
import ListDisplay from "../components/ListDisplay";

function Radio() {
  const [tracks, setTracks] = useState([]);
  // the track dependency currently depends on checking the id of the most recently played song
  const trackDependency = tracks.length > 0 ? tracks[0].id : null;

  useEffect(() => {
    let mounted = true;
    getRecentTracks().then((tracks) => {
      if (mounted) {
        setTracks(tracks);
      }
    });
    return () => {
      mounted = false;
    };
  }, [trackDependency]);

  return (
    <div>
      <h1 className="player-title">Radio</h1>
      <h2 className="player-description">
        My 10 most recently listened to tracks
      </h2>
      <ListDisplay tracks={tracks} />
    </div>
  );
}

export default Radio;
