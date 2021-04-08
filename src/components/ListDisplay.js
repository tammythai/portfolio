import React from "react";
import {
  msToTime,
  datetimeToDate,
  formatTimeToClock,
  displayArtists,
} from "../utilities/helpers";

function ListDisplay(props) {
  const tracks = props.tracks;

  // make sure to have a check if it's undefined
  const displayTracks = tracks?.map((track, index) => (
    <div className="list-display-track player-content" key={index}>
      <a
        href={"https://open.spotify.com/track/" + track.id}
        target="_blank"
        rel="noopener noreferrer"
        className="track-title"
      >
        {track.title}
      </a>
      <span className="track-artist">{displayArtists(track.artists)}</span>
      <a
        href={"https://open.spotify.com/album/" + track.album.id}
        target="_blank"
        rel="noopener noreferrer"
        className="track-album"
      >
        {track.album.name}
      </a>
      <span>{datetimeToDate(track.date_added)}</span>
      {/* <span>{msToTime(track.duration)}</span> */}
      <span>{formatTimeToClock(msToTime(track.duration))}</span>
    </div>
  ));

  const listDisplayHeader = (
    <div className="list-display-track caps-heading">
      <span className="track-title">Title</span>
      <span className="track-artist">Artist</span>
      <span className="track-album">Album</span>
      <span className="track-date">Date</span>
      <span className="track-time">Time</span>
    </div>
  );

  return (
    <div className="list-display">
      {listDisplayHeader}
      {displayTracks}
    </div>
  );
}

export default ListDisplay;
