import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password
  });
};

const login = async (username, password) => {
  const user = {
    id: 1,
    username: "Test",
    email: "test@email.com",
    accessToken: "aaaaaaaaaa",
    roles: ["ROLE_ADMIN"]
  };
  localStorage.setItem("user", JSON.stringify(user));
  return user;
  /*return axios
    .post(API_URL + "signin", {
      username,
      password
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });*/
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser
};
