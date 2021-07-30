import axios from "axios";

import authHeader from "./auth-header";

const handleError = (e) => {
  if (e.error === "Invalid token found") {
    localStorage.removeItem("user");
  }

  return e;
};

const doGet = (URL, data = "") => {
  if (data) {
    URL += (URL.includes("?") ? "&" : "?") + JSON.stringify(data);
  }
  return axios.get(URL, { headers: authHeader() }).then(
    (r) => r.data,
    (e) => handleError
  );
};

const doPost = (URL, data) => {
  return axios.post(URL, data, { headers: authHeader() }).then(
    (r) => r.data,
    (e) => handleError
  );
};

export default {
  doGet,
  doPost
};
