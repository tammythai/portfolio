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
