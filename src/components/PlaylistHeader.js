import React from "react";

function PlaylistHeader(props) {
  const { name, id, description, images } = props.playlistInfo;
  console.log(images);

  //   const playlistName = props.playlistName;
  //   const playlistImage = props.playlistImage;
  //   const playlistDescription = props.playlistDescription;

  return (
    <div className="playlist-header">
      <img src={null} alt={name} />
      <div>
        <div className="page-title">{name}</div>
        <div className="page-description">{description}</div>
      </div>
    </div>
  );
}

export default PlaylistHeader;
