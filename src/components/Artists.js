import React, { useEffect, useState } from "react";
import { getTopArtists } from "../utilities/api";
import CollectionDisplay from "../components/CollectionDisplay";

function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getTopArtists().then((artists) => {
      setArtists(artists);
    });
  }, []);
  return (
    <div>
      <CollectionDisplay collection={artists} collectionType="artists" />
    </div>
  );
}

export default Artists;
