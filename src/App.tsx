import React from "react";
import Routes from "./routes";
import ReactGA from "react-ga4";

ReactGA.initialize("G-SDBJNYSXEP");
ReactGA.send("pageview");

const App = () => {
  return <Routes />;
};

export default App;
