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

  const [users, setUsers] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch("/api/greeting")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
        console.log("hello", users);
      })
      .catch((err) => {
        setHasError(true);
        console.log(err);
      });
  }, []);

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
          <h1>Users</h1>
          {hasError
            ? "Error occurred"
            : users.map((user) => <div key={user.id}>{user.username}</div>)}
        </div>
      </div>
    </Draggable>
  );
}

export default App;
