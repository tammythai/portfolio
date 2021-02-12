import React from "react";
import "./App.scss";
import Titlebar from "./Titlebar";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Home from "./Home";
import Browse from "./Browse";
import Radio from "./Radio";
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
  return (
    <Draggable handle="#handle">
      <div className="app-container">
        <div className="app">
          <Titlebar />
          <Router>
            <Sidebar routes={routesList} />
            <Main routes={routesList} />
          </Router>
        </div>
      </div>
    </Draggable>
  );
}

export default App;
