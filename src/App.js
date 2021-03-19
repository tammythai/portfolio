import React, { useEffect, useState } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Home from "./components/Home";
import Browse from "./components/Browse";
import Radio from "./components/Radio";
import Player from "./components/Player";
import Titlebar from "./components/Titlebar";
import { BrowserRouter as Router } from "react-router-dom";
import Draggable from "react-draggable";
import LikedSongs from "./components/LikedSongs";
//import { setConstantValue } from "typescript";

const navRoutes = [
  {
    path: "/home",
    title: "Home",
    main: () => <Home />,
  },
  {
    path: "/browse",
    title: "Browse",
    main: () => <Browse />,
  },
  {
    path: "/radio",
    title: "Radio",
    main: () => <Radio />,
  },
];

const libraryRoutes = [
  {
    path: "/liked-songs",
    title: "Liked Songs",
    main: () => <LikedSongs />,
  },
  {
    path: "/artists",
    title: "Artists",
  },
];

// need to reach login endpoint to auto login
// have something to track if im logged in so when you make calls to the api
// it doesn't die
// also need to have a fallback if im not logged in (aka no token available)

const routesList = [navRoutes];

function App() {
  const nodeRef = React.useRef(null);

  // const [users, setUsers] = useState([]);
  // const [hasError, setHasError] = useState(false);

  const loginContext = React.createContext(false);

  // useEffect(() => {
  //   fetch("/api/greeting")
  //     .then((res) => res.json())
  //     .then((users) => {
  //       setUsers(users);
  //       console.log("hello", users);
  //     })
  //     .catch((err) => {
  //       setHasError(true);
  //       console.log(err);
  //     });
  // }, []);

  // can use the context API to let the other components know if you're
  // logged in or not

  console.log("this be the url " + window.location.href);

  return (
    <Draggable nodeRef={nodeRef} handle="#handle">
      {/* <loginContext.Provider >

      </loginContext.Provider> */}
      <div ref={nodeRef} className="app-container">
        <div className="app">
          <Titlebar />
          <Router>
            <Sidebar routes={routesList} />
            <Main routes={routesList} />
          </Router>
          <Player />
        </div>
      </div>
    </Draggable>
  );
}

export default App;
