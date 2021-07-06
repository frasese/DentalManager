import axios from "axios";

//import authHeader from "./auth-header";

const API_URL = "http://localhost/testserver/";

const getClientList = () => {
  /*return Promise.resolve([
    { id: "a", name: "aaa", value: true, email: "aaa@" },
    { id: "e", name: "eee", value: false, email: "eee@" },
    { id: "i", name: "iii", value: true, email: "iii@" }
  ]);*/
  //TODO: Qué pasa si devuelve error??
  return axios.get(API_URL + "?id=all").then(
    (r) => r.data,
    (e) => e
  );
  //return axios.get(API_URL + "?id=all").then((r) => r.data);
};

const getClient = (id) => {
  /*return Promise.resolve({
    id: id,
    name: "n " + id,
    value: true,
    email: id + "@"
  });*/
  //return axios.get(API_URL + "?id=" + id, { headers: authHeader() });
  return axios.get(API_URL + "?id=" + id).then((r) => r.data);
};

const postClient = (client) => {
  return axios.post(API_URL, client);
  //return Promise.resolve(true);
};

export default {
  getClientList,
  getClient,
  postClient
};
