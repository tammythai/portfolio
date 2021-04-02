export const msToTime = (ms) => {
  const totalSeconds = ms / 1000;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.round(totalSeconds - minutes * 60);
  const secondsFormatted = seconds < 10 ? "0" + seconds : seconds;
  const time = minutes + ":" + secondsFormatted;
  return time;
};

export const datetimeToDate = (datetime) => {
  return datetime.split("T")[0];
};

export const displayArtists = (artists) => {
  let artistList = [];
  artists.forEach((artist) => artistList.push(artist.name));
  return artistList.join(", ");
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
