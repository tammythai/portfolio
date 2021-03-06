import React, { useContext, useState } from "react";
import { CurrentSongContext } from "../contexts/CurrentSongProvider";
import EllipsisText from "./EllipsisText";
import { displayArtists } from "../utilities/helpers";
import Slider from "@material-ui/core/Slider";

function Player() {
  const { currentSong } = useContext(CurrentSongContext);
  const [volume, setVolume] = useState(30);

  const handleVolumeChange = (event, newVolume) => {
    setVolume(newVolume);
  };

  const playerDescription = (
    <div className="player-description">
      <img
        className="player-image"
        src={currentSong?.album.images[0].url}
        alt=""
      />
      <EllipsisText>
        <a
          className="player-song"
          href={"http://open.spotify.com/track/" + currentSong?.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          {currentSong?.title}
        </a>
      </EllipsisText>
      <EllipsisText>
        <span className="player-artist">
          {currentSong?.artists ? displayArtists(currentSong.artists) : null}
        </span>
      </EllipsisText>
      <span className="material-icons-outlined player-favorite">
        favorite_border
      </span>
    </div>
  );

  return (
    <div className="player">
      {currentSong ? (
        playerDescription
      ) : (
        <div className="player-description"></div>
      )}
      <div className="player-controls">
        <span className="material-icons md-18 player-controls-icons">
          shuffle
        </span>
        <span className="material-icons md-24 player-controls-icons">
          skip_previous
        </span>
        <span className="material-icons md-36 player-controls-icons">
          pause_circle_outline
        </span>
        <span className="material-icons md-24 player-controls-icons">
          skip_next
        </span>
        <span className="material-icons md-18 player-controls-icons">
          repeat
        </span>
      </div>
      <div className="player-volume-controls">
        <span className="material-icons-outlined md-18 player-volume">
          volume_up
        </span>
        <Slider
          className="player-slider"
          value={volume}
          onChange={handleVolumeChange}
          aria-labelledby="continuous-slider"
        />
      </div>
    </div>
  );
}

export default Player;
