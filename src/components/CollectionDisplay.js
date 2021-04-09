import React from "react";
import { Link } from "react-router-dom";

function CollectionDisplay(props) {
  const title = props.title;
  const collection = props.collection;
  const collectionType = props.collectionType;
  let displayCollection = null;

  if (collectionType === "albums") {
    displayCollection = collection.map((item, index) => (
      <div key={index}>
        <div
          className="collection-item"
          onClick={() => console.log(collection[index])}
        >
          <img
            className="collection-image"
            src={item.album.images[0].url}
            alt={item.album.name}
          />
          <span className="material-icons md-36 collection-play">
            play_circle
          </span>
        </div>
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
        <div
          className="collection-item"
          onClick={() => console.log(collection[index])}
        >
          <img
            className="collection-image"
            src={item.images[0].url}
            alt={item.name}
          />
          <span className="material-icons md-36 collection-play">
            play_circle
          </span>
        </div>
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
  } else if (collectionType === "projects") {
    displayCollection = collection.map((item, index) => (
      <div key={index}>
        <Link to={item.path}>
          <div
            className="collection-item"
            onClick={() => console.log(collection[index])}
          >
            <img
              className="collection-image"
              src={item.image}
              alt={item.title}
            />
            <span className="material-icons md-36 collection-play">
              play_circle
            </span>
          </div>
        </Link>
        <div className="collection-item-desc player-description">
          <div className="collection-item-title">{item.title}</div>
          <div>{item.description}</div>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <h1 className="collection-display-title player-title">{title}</h1>
      <div className="collection-display">{displayCollection}</div>
    </div>
  );
}

export default CollectionDisplay;
