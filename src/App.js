import React, { useState, useEffect } from "react";
import { Router, navigate } from "@reach/router";

import Login from "./components/Login/Login";
import Main from "./components/Main/Main";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  useEffect(() => {}, []);
  return (
    <Router>
      <Main default />
      <Login path="/login" />
    </Router>
  );
};

export default App;
