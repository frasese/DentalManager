import React, { useState, useEffect } from "react";
import { navigate, useLocation } from "@reach/router";

import AuthService from "../../services/auth.service";

import "./Login.css";

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const location = useLocation();

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await AuthService.login(username, password).then(() => {
      navigate(location.state?.from ? location.state.from : "/");
    });
  };

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
