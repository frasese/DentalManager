import React from "react";
import { Link, navigate, useLocation } from "@reach/router";

import AuthService from "../../services/auth.service";

const MainButton = () => {
  const location = useLocation();

  if (location.pathname !== "/") {
    return <Link to="/">Return to main</Link>;
  }
  return null;
};

const BackButton = () => {
  const location = useLocation();

  if (location.pathname !== "/") {
    return <Link to="../">Back</Link>;
  }
  return null;
};

export default function Header() {
  const handleClick = () => {
    AuthService.logout();
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <MainButton />
        <BackButton />
        <button className="btn btn-primary" onClick={handleClick}>
          Logout
        </button>
      </nav>
    </div>
  );
}
