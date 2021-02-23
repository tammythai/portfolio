import React from "react";

function Player() {
  return (
    <div className="player">
      <span className="material-icons md-24">shuffle</span>
      <span className="material-icons md-36">skip_previous</span>
      <span className="material-icons md-48">pause_circle_outline</span>
      <span className="material-icons md-36">skip_next</span>
      <span className="material-icons md-24">repeat</span>
    </div>
  );
}

export default Player;
