import React from "react";
import picture from "../images/profile_picture.jpeg";

function Home() {
  return (
    <div className="home">
      <h4>Artist</h4>
      <img src={picture} alt="Face of Tammy Thai" />
      <span className="name">
        <h1>Tammy</h1>
        <h1>Thai</h1>
      </span>
      <h2>Bio</h2>
      <p>
        Hi, I'm an aspiring full-stack developer who wants to create simple,
        beautiful, and accessible applications that leave an impact.
      </p>

      <h2>More</h2>
      <p>
        I'm a recent graduate from University of California, Irvine who enjoys
        listening and sharing music, learning guitar, cooking food for others,
        running, arts/crafts, and exploring mental health and self-healing.
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
