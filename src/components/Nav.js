import React from "react";
import { Route, Link, Switch } from "react-router-dom";

function Nav(props) {
  const routes = props.routes;
  const name = props.name;

  const routesList = routes.map((route, index) => (
    <Route key={index} path={route.path} />
  ));

  const routesLink = routes.map((route, index) => (
    <li key={index}>
      <Link to={route.path}>{route.title}</Link>
    </li>
  ));

  return (
    <div className="sidebar-element">
      {name ? <h3 className="caps-heading">{name}</h3> : null}
      <ul>{routesLink}</ul>
      <Switch>{routesList}</Switch>
    </div>
  );
}

export default Nav;
