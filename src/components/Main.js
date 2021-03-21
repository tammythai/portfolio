import React from "react";
import { Switch, Route } from "react-router-dom";

function Main(props) {
  const [navRoutes, libraryRoutes, playlistsRoutes] = props.routes;

  const navRoutesContent = navRoutes.map((route, index) => (
    <Route key={index} path={route.path} children={route.main} />
  ));

  const libraryRoutesContent = libraryRoutes.map((route, index) => (
    <Route key={index} path={route.path} children={route.main} />
  ));

  const playlistsRoutesContent = playlistsRoutes.map((route, index) => (
    <Route key={index} path={route.path} children={route.main} />
  ));

  return (
    <div className="main">
      <Switch>
        {navRoutesContent}
        {libraryRoutesContent}
        {playlistsRoutesContent}
      </Switch>
    </div>
  );
}

export default Main;
