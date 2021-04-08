import React, { useEffect, useState } from "react";
import { getTopAlbums } from "../utilities/api";
import CollectionDisplay from "../components/CollectionDisplay";

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getTopAlbums().then((albums) => {
      setAlbums(albums);
    });
  }, [JSON.stringify(albums)]);

  return (
    <div>
      <CollectionDisplay
        title="Albums"
        collection={albums}
        collectionType="albums"
      />
    </div>
  );
}

export default Albums;
