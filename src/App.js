import React from "react";
import "./App.css";
import Home from "./screens/WelcomePage/Home.js";
import { CssBaseline } from "@material-ui/core";
import SearchResults from "./screens/SeachResults/SearchResults";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Route key="home" exact path="/bispari-fe" component={Home} />
      <Route key="profile" exact path="/profile" component={Home} />
      <Route key="search" exact path="/search" component={SearchResults} />
    </React.Fragment>
  );
}
