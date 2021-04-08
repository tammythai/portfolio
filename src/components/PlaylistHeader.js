import React from "react";
import { msToTime, formatTimeToText } from "../utilities/helpers";

function PlaylistHeader(props) {
  const {
    name,
    id,
    description,
    images,
    duration,
    song_count,
  } = props.playlistInfo;

  return (
    <div className="playlist-header">
      <div className="playlist-item" onClick={() => console.log(id)}>
        <img
          className="playlist-image"
          src={images ? images[0].url : null}
          alt={name}
        />
        <span className="material-icons md-36 playlist-play">play_circle</span>
      </div>
      <div className="playlist-info">
        <a
          className="playlist-title"
          href={"http://open.spotify.com/playlist/" + id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="player-title">{name}</h1>
        </a>
        <div className="player-description">{description}</div>
        <div className="playlist-length player-description">
          {song_count} songs, {formatTimeToText(msToTime(duration))}
        </div>
      </div>
    </div>
  );
}

export default PlaylistHeader;
