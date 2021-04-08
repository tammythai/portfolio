import React from "react";

function CollectionDisplay(props) {
  const collection = props.collection;
  const collectionType = props.collectionType;
  let displayCollection = null;

  if (collectionType === "albums") {
    displayCollection = collection.map((item, index) => (
      <div key={index}>
        <img
          className="collection-item"
          src={item.album.images[0].url}
          alt={item.album.name}
          width={item.album.images[0].width}
          height={item.album.images[0].height}
        />
        <div className="collection-item-desc player-description">
          <a
            className="collection-item-title"
            href={"http://open.spotify.com/album" + item.album.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.album.name}
          </a>
          {item.artists.map((artist, index) => (
            <a key={index} href={"http://open.spotify.com/artist/" + artist.id}>
              {artist.name}
            </a>
          ))}
        </div>
      </div>
    ));
  } else if (collectionType === "artists") {
    displayCollection = collection.map((item, index) => (
      <div key={index}>
        <img
          className="collection-item"
          src={item.images[0].url}
          alt={item.name}
          width={item.images[0].width}
          height={item.images[0].height}
        />
        <div className="collection-item-desc player-description">
          <a
            className="collection-item-title"
            href={"http://open.spotify.com/artist/" + item.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.name}
          </a>
        </div>
      </div>
    ));
  }

  return <div className="collection-display">{displayCollection}</div>;
}

export default CollectionDisplay;
