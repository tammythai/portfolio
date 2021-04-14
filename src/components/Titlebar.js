import React from "react";

function Titlebar() {
  return (
    <React.Fragment>
      <div id="handle" className="titlebar-left"></div>
      <div id="handle" className="titlebar-right"></div>
      <div className="window-actions">
        <span className="material-icons window-minimize">remove</span>
        <span className="material-icons window-close">clear</span>
      </div>
    </React.Fragment>
  );
}

export default Titlebar;
