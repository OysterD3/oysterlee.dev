import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import type { StaticRouterContext } from "react-router";
import App from "./App";
import "./assets/index.scss";
import "virtual:windi.css";

export function render(url: string, context: StaticRouterContext) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>,
  );
}
