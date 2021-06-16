import React, { useState } from "react";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";

//import { loginUser } from "../API";

import "./Login.css";

function loginUser(state) {
  // pretend this makes a request
  return Promise.resolve({ token: "aaaa" });
}

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      username,
      password
    }).then(
      (token) => {
        console.log("OK -> token: " + token);
        setToken(token);
        navigate("/");
      },
      (error) => {
        console.log("Error:" + error);
      }
    );
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

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

/*const logout = () => {
  localStorage.removeItem("token");
};*/

/*export default {
  Login,
  logout
};*/
export default Login;
