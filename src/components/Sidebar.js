import React from "react";
import Nav from "./Nav";

function Sidebar(props) {
  const [navRoutes, libraryRoutes, playlistsRoutes] = props.routes;

  return (
    <div className="sidebar">
      <Nav routes={navRoutes} />
      <Nav routes={libraryRoutes} name="Library" />
      <Nav routes={playlistsRoutes} name="Playlists" />
    </div>
  );
}

export default Sidebar;
