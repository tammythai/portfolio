import React from "react";

function Playlist(props) {
  const playlistId = props.playlistId;

  return (
    <div className="sidebar-element">
      here is the playlist id... {playlistId}
    </div>
  );
}

export default Playlist;
