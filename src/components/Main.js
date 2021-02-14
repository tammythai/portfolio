import React from "react";
import { Switch, Route } from "react-router-dom";

function Main(props) {
  const [navRoutes] = props.routes;

  const navRoutesContent = navRoutes.map((route, index) => (
    <Route key={index} path={route.path} children={route.main} />
  ));

  return (
    <div className="main">
      <Switch>{navRoutesContent}</Switch>
    </div>
  );
}

export default Main;
