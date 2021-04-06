import {
  mapItemsToTracks,
  getTotalSongCount,
  getTotalSongDuration,
} from "./helpers";

export const getRecentTracks = async () => {
  const tracks = await fetch("/api/radio")
    .then((res) => res.json())
    .then((data) => {
      return mapItemsToTracks(data.items);
    })
    .catch((err) => console.log(err));
  return tracks;
};

export const getLikedTracks = async () => {
  const tracks = await fetch("/api/liked-songs")
    .then((res) => res.json())
    .then((data) => {
      return mapItemsToTracks(data.items);
    })
    .catch((err) => console.log(err));
  return tracks;
};

export const getTopAlbums = async () => {
  const albums = await fetch("/api/albums")
    .then((res) => res.json())
    .then((data) => {
      return data.items.map((item) => ({
        album: {
          name: item.album.name,
          id: item.album.id,
          images: item.album.images.map((image) => ({
            height: image.height,
            width: image.width,
            url: image.url,
          })),
        },
        artists: item.artists.map((artist) => ({
          name: artist.name,
          id: artist.id,
        })),
      }));
    })
    .catch((err) => console.log(err));
  return albums;
};

export const getTopArtists = async () => {
  const artists = await fetch("/api/artists")
    .then((res) => res.json())
    .then((data) => {
      return data.items.map((item) => ({
        name: item.name,
        id: item.id,
        images: item.images.map((image) => ({
          height: image.height,
          width: image.width,
          url: image.url,
        })),
        genres: [...item.genres],
      }));
    })
    .catch((err) => console.log(err));
  return artists;
};

export const getPlaylist = async (playlistId) => {
  const playlist = await fetch("/api/playlists/" + playlistId)
    .then((res) => res.json())
    .then((data) => {
      return {
        playlist: {
          name: data.name,
          id: data.id,
          description: data.description,
          images: data.images.map((image) => ({
            height: image.height,
            width: image.width,
            url: image.url,
          })),
          duration: getTotalSongDuration(data.tracks.items),
          song_count: getTotalSongCount(data.tracks.items),
        },
        tracks: mapItemsToTracks(data.tracks.items),
      };
    })
    .catch((err) => console.log(err));
  return playlist;
};
