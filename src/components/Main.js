import React from "react";
import Home from "../pages/Home";
import { Switch, Route } from "react-router-dom";

function Main(props) {
  const [
    navRoutes,
    libraryRoutes,
    playlistsRoutes,
    projectRoutes,
  ] = props.routes;

  const navRoutesContent = navRoutes.map((route, index) => (
    <Route key={index} path={route.path} children={route.main} />
  ));

  const libraryRoutesContent = libraryRoutes.map((route, index) => (
    <Route key={index} path={route.path} children={route.main} />
  ));

  const playlistsRoutesContent = playlistsRoutes.map((route, index) => (
    <Route key={index} path={route.path} children={route.main} />
  ));

  const projectRoutesContent = projectRoutes.map((route, index) => (
    <Route key={index} path={route.path} children={route.main} />
  ));

  return (
    <div className="main">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {navRoutesContent}
        {libraryRoutesContent}
        {playlistsRoutesContent}
        {projectRoutesContent}
      </Switch>
    </div>
  );
}

export default Main;
