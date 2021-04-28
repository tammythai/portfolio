import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Player from "./components/Player";
import Titlebar from "./components/Titlebar";
import Background from "./components/Background";
import Login from "./pages/Login";
import { CurrentSongProvider } from "./contexts/CurrentSongProvider";
import Draggable from "react-draggable";
import { routesList } from "./routes";

function App() {
  const nodeRef = React.useRef(null);
  const code = new URLSearchParams(window.location.search).get("code") || null;

  return code === "200" ? (
    <Background portfolio={true}>
      <Draggable
        nodeRef={nodeRef}
        handle="#handle"
        defaultPosition={{ x: 450, y: -60 }}
      >
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
    </Background>
  ) : (
    <Background portfolio={false}>
      <Login code={code} />
    </Background>
  );
}

export default App;
