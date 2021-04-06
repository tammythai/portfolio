import React from "react";

export const msToTime = (ms) => {
  const totalSeconds = ms / 1000;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const trueSeconds = Math.round(totalSeconds - totalMinutes * 60);
  let trueHours = 0;
  let trueMinutes = totalMinutes;
  if (totalMinutes >= 60) {
    trueHours = Math.floor(totalMinutes / 60);
    trueMinutes = Math.round(totalMinutes - trueHours * 60);
  }
  const time = {
    hours: trueHours,
    minutes: trueMinutes,
    seconds: trueSeconds,
  };
  return time;
};

export const formatTimeToClock = (time) => {
  let { hours, minutes, seconds } = time;
  if (hours > 0 && minutes < 10) {
    minutes = "0" + time.minutes;
  }
  if (seconds < 10) {
    seconds = "0" + time.seconds;
  }

  if (hours > 0) {
    return `${hours}:${minutes}:${seconds}`;
  } else {
    return `${minutes}:${seconds}`;
  }
};

export const formatTimeToText = (time) => {
  let { hours, minutes, seconds } = time;
  if (hours > 0) {
    if (minutes != 0) {
      return `${hours} hr ${minutes} min`;
    } else {
      return `${hours} hr`;
    }
  } else {
    if (minutes < 10) {
      return `${minutes} min ${seconds} sec`;
    } else {
      return `${minutes} min`;
    }
  }
};

export const datetimeToDate = (datetime) => {
  return datetime.split("T")[0];
};

export const displayArtists = (artists) => {
  let artistList = [];
  artists.forEach((artist, index) => {
    artistList.push(
      <a
        key={index}
        href={"https://open.spotify.com/artist/" + artist.id}
        target="_blank"
        rel="noopener noreferrer"
      >
        {artist.name}
      </a>
    );
    artistList.push(", ");
  });
  artistList.splice(-1, 1);
  return artistList;
};

export const mapItemsToTracks = (items) => {
  return items.map((item) => ({
    title: item.track.name,
    id: item.track.id,
    artists: item.track.artists.map((artist) => ({
      name: artist.name,
      id: artist.id,
    })),
    album: {
      name: item.track.album.name,
      id: item.track.album.id,
      images: item.track.album.images.map((image) => ({
        height: image.height,
        width: image.width,
        url: image.url,
      })),
    },
    date_added: item.played_at || item.added_at,
    duration: item.track.duration_ms,
  }));
};

export const getTotalSongCount = (items) => {
  return items.length;
};

export const getTotalSongDuration = (items) => {
  const durationInMs = items.reduce(
    (totalDuration, currentItem) =>
      totalDuration + currentItem.track.duration_ms,
    0
  );
  return durationInMs;
};
