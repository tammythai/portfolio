import React from "react";
import DesktopIcon from "./DesktopIcon";

function Background(props) {
  const portfolio = props.portfolio;

  return (
    <div className="bg">
      <div className="bg-desktop">
        <DesktopIcon name="Portfolio">
          <span className="material-icons-outlined md-48">library_music</span>
        </DesktopIcon>
        {props.children}
      </div>
      <div className="bg-toolbar">
        <div className="bg-toolbar-block-outset">Start</div>
        {portfolio ? (
          <div className="bg-toolbar-block-inset">Portfolio</div>
        ) : null}
      </div>
    </div>
  );
}

export default Background;
