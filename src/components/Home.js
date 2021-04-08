import React from "react";
import picture from "../images/profile_picture.jpeg";

function Home() {
  return (
    <div className="home">
      <h4 className="caps-heading">Artist</h4>
      <img src={picture} alt="Face of Tammy Thai" />
      <span className="name">
        <h1>Tammy</h1>
        <h1>Thai</h1>
      </span>
      <h2>Bio</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum
        erat in volutpat pellentesque. Duis suscipit, tellus eget egestas
        gravida.
      </p>

      <h2>More</h2>
      <p>
        Nunc feugiat ultrices aliquam. Sed sed porta ante. Vestibulum purus
        urna, ultrices at ipsum ut, feugiat aliquam quam. Sed quis aliquam est.
      </p>

      <h2>Info</h2>
      <ul>
        <li>LinkedIn</li>
        <li>GitHub</li>
        <li>Resume</li>
      </ul>
    </div>
  );
}

export default Home;
