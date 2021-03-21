import React, { useState, useEffect } from "react";
import { getRecentTracks } from "../utilities/api";
import ListDisplay from "./ListDisplay";

function Radio() {
  const [tracks, setTracks] = useState([]);
  // use useEffect to setTracks to the filtered list from
  // fetching /api/radio
  // you can extract out the function to an api functions file
  // have it so that useEffect is only called when tracks changes

  useEffect(() => {
    // const fetchTracks = async () => {
    //   const data = await getRecentTracks();
    //   console.log(data);
    //   setTracks(data);
    // };
    // fetchTracks();

    getRecentTracks().then((tracks) => {
      setTracks(tracks);
    });
  }, []);

  return (
    <div>
      <h1 className="page-title">Radio</h1>
      <h2 className="page-description">
        My 10 most recently listened to tracks
      </h2>
      <ListDisplay tracks={tracks} />
    </div>
  );
}

export default Radio;
