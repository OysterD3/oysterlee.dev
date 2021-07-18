import React from "react";
import { Switch, Route } from "react-router-dom";

type IRoutes = {
  name: string;
  path: string;
  component: Function;
};

// exclude dirs and file start with underscore
const pages = import.meta.globEager("./pages/[^_]**/[^_]*.tsx");

const routes: IRoutes[] = Object.keys(pages).map((v) => {
  const name = v.match(/\.\/pages\/(.*)\.tsx$/)?.[1] || "";
  return {
    name,
    path: (name.split("/")[0] === "home"
      ? name.replace("home", "")
      : `/${name}`
    ).replace("/index", "/"),
    component: pages[v].default,
  };
});

const Routes = () => {
  return (
    <Switch>
      {routes.map(({ path, component: PageComponent }) => {
        return (
          <Route key={path} path={path}>
            <PageComponent />
          </Route>
        );
      })}
    </Switch>
  );
};

export default Routes;
