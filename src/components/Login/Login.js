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
    await AuthService.login(username, password);
    navigate(location.state?.from ? location.state.from : "/");
  };

  return (
    <div className="container">
      <h1>Introduzca usuario y contraseña</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            name="username"
            className="form-control"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-success mb-4">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
