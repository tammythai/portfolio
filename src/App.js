import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Player from "./components/Player";
import Titlebar from "./components/Titlebar";
import { CurrentSongProvider } from "./components/CurrentSongProvider";
import Draggable from "react-draggable";
import { routesList } from "./routes";

// need to reach login endpoint to auto login
// have something to track if im logged in so when you make calls to the api
// it doesn't die
// also need to have a fallback if im not logged in (aka no token available)

function App() {
  const nodeRef = React.useRef(null);

  // const [users, setUsers] = useState([]);
  // const [hasError, setHasError] = useState(false);

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
      <div ref={nodeRef} className="app-container">
        <CurrentSongProvider>
          <div className="app">
            <Titlebar />
            <Router>
              <Sidebar routes={routesList} />
              <Main routes={routesList} />
            </Router>
            <Player />
          </div>
        </CurrentSongProvider>
      </div>
    </Draggable>
  );
}

export default App;
