import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Playlist from "./components/Playlist";
import Player from "./components/Player";
import Titlebar from "./components/Titlebar";
import Home from "./pages/Home";
import LikedSongs from "./pages/LikedSongs";
import Browse from "./pages/Browse";
import Radio from "./pages/Radio";
import Artists from "./pages/Artists";
import Albums from "./pages/Albums";
import Healthwise from "./projects/Healthwise";
import Paciolan from "./projects/Paciolan";
import Draggable from "react-draggable";

import paciolan from "./images/paciolan.png";
import healthwise from "./images/healthwise.png";

const projectRoutes = [
  {
    title: "Paciolan - Inventory in Distress",
    description:
      "React/Node.js project creating a sign-up portal for increasing ticket sales tailored to customers",
    image: paciolan,
    path: "/paciolan",
    main: () => <Paciolan />,
  },
  {
    title: "Healthwise - Mobile App/Admin Dashboard",
    description:
      "Angular project involving IoT and healthcare which focused on user provided data to generate better health solutions",
    image: healthwise,
    path: "/healthwise",
    main: () => <Healthwise />,
  },
];

const navRoutes = [
  {
    path: "/home",
    title: "Home",
    main: () => <Home />,
  },
  {
    path: "/browse",
    title: "Browse",
    main: () => <Browse projects={projectRoutes} />,
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
    main: () => <Artists />,
  },
  {
    path: "/albums",
    title: "Albums",
    main: () => <Albums />,
  },
];

const playlistsRoutes = [
  {
    path: "/playlist/to-learn",
    title: "To learn",
    main: () => <Playlist playlistId="7AhOv6H9IkZqAR5wRYpNxR" />,
  },
  {
    path: "/playlist/feb-21",
    title: "feb '21",
    main: () => <Playlist playlistId="2FkEoyPkOGFEbiIwUW7bz7" />,
  },
  {
    path: "/playlist/top-songs-2020",
    title: "Your Top...",
    main: () => <Playlist playlistId="37i9dQZF1EMh8ohlGzGpOf" />,
  },
];

// need to reach login endpoint to auto login
// have something to track if im logged in so when you make calls to the api
// it doesn't die
// also need to have a fallback if im not logged in (aka no token available)

const routesList = [navRoutes, libraryRoutes, playlistsRoutes, projectRoutes];

function App() {
  const nodeRef = React.useRef(null);

  // const [users, setUsers] = useState([]);
  // const [hasError, setHasError] = useState(false);

  // const loginContext = React.createContext(false);

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

  // console.log("this be the url " + window.location.href);

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
