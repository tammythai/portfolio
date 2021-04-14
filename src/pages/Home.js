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
        Front-end developer learning React. Striving to make applications that
        are aesthetic, accessible, and authentic. This portfolio was made with
        inspiration from Spotify and Windows explorer.
      </p>

      <h2>More</h2>
      <p>
        Graduate from University of California, Irvine who enjoys morning
        exercise, playing guitar, making monthly playlists, watching her friends
        game, and gaining more self-awareness.
      </p>

      <h2>Info</h2>
      <a
        href="https://www.linkedin.com/in/tammy-thai98/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/tammythai"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        href="https://drive.google.com/file/d/1VvHS9S4P7XK35O-_-URPPhL1SGtUgqm8/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </div>
  );
}

export default Home;
