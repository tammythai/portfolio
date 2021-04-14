import React, { createContext, useState, useMemo } from "react";

const CurrentSongContext = createContext(null);

function CurrentSongProvider(props) {
  const [currentSong, setCurrentSong] = useState(null);
  const currentSongValue = useMemo(() => ({ currentSong, setCurrentSong }), [
    currentSong,
    setCurrentSong,
  ]);

  return (
    <CurrentSongContext.Provider value={currentSongValue}>
      {props.children}
    </CurrentSongContext.Provider>
  );
}

export { CurrentSongProvider, CurrentSongContext };
