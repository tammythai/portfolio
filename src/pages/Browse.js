import React from "react";
import CollectionDisplay from "../components/CollectionDisplay";
import { Switch, Route } from "react-router-dom";

function Browse(props) {
  const projects = props.projects;
  const projectsRoutes = projects.map((route, index) => (
    <Route key={index} path={route.path} children={route.main} />
  ));

  return (
    <div>
      <CollectionDisplay
        title="Projects"
        collection={projects}
        collectionType="projects"
      />
      <Switch>{projectsRoutes}</Switch>
    </div>
  );
}

export default Browse;
