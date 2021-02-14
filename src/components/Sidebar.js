import React from "react";
import Nav from "./Nav";
import Library from "./Library";
import Playlists from "./Playlists";

function Sidebar(props) {
  const [navRoutes] = props.routes;

  return (
    <div className="sidebar">
      <Nav routes={navRoutes} />
      <Library />
      <Playlists />
    </div>
  );
}

export default Sidebar;
