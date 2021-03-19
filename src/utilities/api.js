export const getRecentTracks = async () => {
  const tracks = await fetch("/api/radio")
    .then((res) => res.json())
    .then((data) => {
      //console.log(data.items);
      return data.items.map((item) => ({
        title: item.track.name,
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
        date_played: item.played_at,
        duration: item.track.duration_ms,
      }));
    })
    .catch((err) => console.log(err));
  return tracks;
};
