import React, { useState, useEffect } from "react";

function Radio() {
  const [tracks, setTracks] = useState([]);
  // use useEffect to setTracks to the filtered list from
  // fetching /api/radio
  // you can extract out the function to an api functions file
  // have it so that useEffect is only called when tracks changes

  return <div>This be the radio yeet</div>;
}

export default Radio;
