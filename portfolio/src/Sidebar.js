import React from "react";
import Nav from "./Nav";

function Sidebar(props) {
  const [navRoutes] = props.routes;

  return (
    <div className="sidebar">
      <Nav routes={navRoutes} />
    </div>
  );
}

export default Sidebar;
