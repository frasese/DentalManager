import React from "react";
import { Router, Link, navigate } from "@reach/router";

const logout = () => {
  sessionStorage.clear();
  navigate("/login");
};

export default function Header() {
  const handleClick = () => {
    logout();
  };
  return (
    <>
      <button onClick={handleClick}>Logout</button>
    </>
  );
}
