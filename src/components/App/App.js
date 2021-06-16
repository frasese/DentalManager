import React, { useState } from "react";
import { Router, Redirect, Link, navigate } from "@reach/router";

import Login from "../Login/Login";
import Main from "../Main/Main";

import "./App.css";

const App = () => {
  const [token, setToken] = useState(
    () => window.sessionStorage.getItem("token") || ""
  );
  console.log("token: " + token);

  React.useEffect(() => {
    if (token) {
      console.log("App useEffect [token]");
      window.sessionStorage.setItem("token", token);
    }
  }, [token]);

  if (!token) {
    return <Login setToken={setToken} />;
    //return <Redirect to="/login" />
  }

  return (
    <Router>
      <Main default />
      <Login path="/login" setToken={setToken} />
    </Router>
  );
};

export default App;
