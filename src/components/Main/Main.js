import { React, useEffect } from "react";
import { useLocation, navigate, Link, Router } from "@reach/router";

import AuthService from "../../services/auth.service";

import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import Clients from "../Clients/Clients";
import Client from "../Clients/Client";

const Placeholder = ({ children }) => {
  return children;
};

const MainMenu = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/client">Clientes</Link>
      </li>
      <li>
        <Link to="/support">Support</Link>
      </li>
      <li>
        <Link to="../">Go Back</Link>
      </li>
    </ul>
  );
};

export default function Main() {
  const location = useLocation();

  useEffect(() => {
    console.log("loading main");
    const user = AuthService.getCurrentUser();

    if (!user) {
      navigate("/login", { state: { from: location.pathname } });
    }
  }, []);

  return (
    <>
      <Header />
      <Router>
        <MainMenu default />
        <Placeholder path="/client">
          <Clients path="/" />
          <Client path=":clientId" />
        </Placeholder>
      </Router>
    </>
  );
}
