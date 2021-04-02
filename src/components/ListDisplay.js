import React from "react";
import { msToTime, datetimeToDate, displayArtists } from "../utilities/helpers";

function ListDisplay(props) {
  const tracks = props.tracks;

  // make sure to have a check if it's undefined
  const displayTracks = tracks?.map((track, index) => (
    <div className="list-display-track" key={index}>
      <span className="track-title">{track.title}</span>
      <span className="track-artist">{displayArtists(track.artists)}</span>
      <span className="track-album">{track.album.name}</span>
      <span>{datetimeToDate(track.date_added)}</span>
      <span>{msToTime(track.duration)}</span>
    </div>
  ));

  const listDisplayHeader = (
    <div className="list-display-track list-header">
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
