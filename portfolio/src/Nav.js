import React from "react";
import { Route, Link, Switch } from "react-router-dom";

function Nav(props) {
  const routes = props.routes;
  const routesList = routes.map((route, index) => (
    <Route key={index} path={route.path} />
  ));

  const routesLink = routes.map((route, index) => (
    <li key={index}>
      <Link to={route.path}>{route.title}</Link>
    </li>
  ));

  return (
    <div className="nav">
      <ul>{routesLink}</ul>
      <Switch>{routesList}</Switch>
    </div>
  );
}

export default Nav;
