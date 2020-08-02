import React from "react";
import "./App.css";
import Home from "./screens/WelcomePage/Home.js";
import { CssBaseline } from "@material-ui/core";
import SearchResults from "./screens/SearchResults/SearchResults";
import { Route } from "react-router-dom";
import Login from "./screens/LoginSignUp/Login";
import Register from "./screens/LoginSignUp/Register";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Route key="home" exact path="/bispari-fe" component={Home} />
      <Route key="profile" path="/profile" component={Home} />
      <Route key="search" path="/search" component={SearchResults} />
      <Route key="login" path="/login" component={Login} />
      <Route key="signUp" path="/register" component={Register} />
    </React.Fragment>
  );
}
