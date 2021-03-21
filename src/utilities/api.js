import { isEmptyStatement } from "typescript";
import { mapItemsToTracks } from "./helpers";

export const getRecentTracks = async () => {
  const tracks = await fetch("/api/radio")
    .then((res) => res.json())
    .then((data) => {
      //console.log(data.items);
      // return data.items.map((item) => ({
      //   title: item.track.name,
      //   artists: item.track.artists.map((artist) => ({
      //     name: artist.name,
      //     id: artist.id,
      //   })),
      //   album: {
      //     name: item.track.album.name,
      //     id: item.track.album.id,
      //     images: item.track.album.images.map((image) => ({
      //       height: image.height,
      //       width: image.width,
      //       url: image.url,
      //     })),
      //   },
      //   date_added: item.played_at || item.added_at,
      //   duration: item.track.duration_ms,
      // }));
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
