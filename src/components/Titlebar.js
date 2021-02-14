import React from "react";

function Titlebar() {
  return (
    <React.Fragment>
      <div id="handle" className="titlebar-left"></div>
      <div id="handle" className="titlebar-right"></div>
      <div className="window-actions">
        <span class="material-icons">remove</span>
        <span class="material-icons">clear</span>
      </div>
    </React.Fragment>
  );
}

export default Titlebar;
