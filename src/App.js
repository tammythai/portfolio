import React from "react";
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

const routesList = [navRoutes];

function App() {
  const nodeRef = React.useRef(null);
  return (
    <Draggable nodeRef={nodeRef} handle="#handle">
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
