import React from "react";
import { displayArtists } from "../utilities/helpers";

function CollectionDisplay(props) {
  const collection = props.collection;
  const collectionType = props.collectionType;
  let displayCollection = null;

  //   const displayAlbums = collection.map((item, index) => (
  //     <div key={index}>
  //       <img
  //         className="collection-item"
  //         src={item.album.images[0].url}
  //         alt={item.album.name}
  //         width={item.album.images[0].width}
  //         height={item.album.images[0].height}
  //       />
  //       <div className="collection-item-desc">
  //         <div className="collection-item-title">{item.album.name}</div>
  //         {item.artists.map((artist, index) => (
  //           <div key={index}>{artist.name}</div>
  //         ))}
  //       </div>
  //     </div>
  //   ));

  //   const displayArtists = collection.map((item, index) => (
  //     <div key={index}>
  //       <img
  //         className="collection-item"
  //         src={item.images[0].url}
  //         alt={item.name}
  //         width={item.images[0].width}
  //         height={item.images[0].height}
  //       />
  //       <div className="collection-item-desc">
  //         <div className="collection-item-title">{item.name}</div>
  //       </div>
  //     </div>
  //   ));

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
        <div className="collection-item-desc">
          <div className="collection-item-title">{item.album.name}</div>
          {item.artists.map((artist, index) => (
            <div key={index}>{artist.name}</div>
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
        <div className="collection-item-desc">
          <div className="collection-item-title">{item.name}</div>
        </div>
      </div>
    ));
  }

  return <div className="collection-display">{displayCollection}</div>;
}

export default CollectionDisplay;
