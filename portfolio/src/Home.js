import React from "react";

function Home() {
  return (
    <div className="home">
      <h3>Artist</h3>
      <h1>Tammy Thai</h1>
      <button type="button">Play</button>
      <button type="button">Following</button>
      <h2>Bio</h2>
      <h3>
        Hi, I'm an aspiring full-stack developer who wants to create simple,
        beautiful, and accessible applications that leave an impact.
      </h3>

      <h2>More</h2>
      <h3>
        I'm a recent graduate from University of California, Irvine who enjoys
        listening and sharing music, learning guitar, cooking food for others,
        running, arts/crafts, and exploring mental health and self-healing.
      </h3>

      <h2>Info</h2>
      <h3>
        <ul>
          <li>LinkedIn</li>
          <li>GitHub</li>
          <li>Resume</li>
        </ul>
      </h3>
    </div>
  );
}

export default Home;
