import React from "react";

function DesktopIcon(props) {
  return (
    <div className="desktop-icon">
      <div className="destop-icon-image">{props.children}</div>
      <div className="desktop-icon-name">{props.name}</div>
    </div>
  );
}

export default DesktopIcon;
