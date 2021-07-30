//import axios from "axios";

//import authHeader from "./auth-header";

import CommunicationService from "./communication.service";

const API_URL = "http://localhost/testserver/?a=client";

const getClientList = () => {
  return Promise.resolve([
    { key: "a", id: "a", name: "aaa", value: true, email: "aaa@" },
    { key: "e", id: "e", name: "eee", value: false, email: "eee@aa" },
    { key: "i", id: "i", name: "iii", value: true, email: "iii@" }
  ]);
  //TODO: Qué pasa si devuelve error??
  /*return axios.get(API_URL + "&id=all", { headers: authHeader() }).then(
    (r) => r.data,
    (e) => e
  );*/
  //return axios.get(API_URL + "?id=all").then((r) => r.data);
  return CommunicationService.doGet(API_URL + "&id=all");
};

const getClient = (id) => {
  return Promise.resolve({
    key: id,
    id: id,
    name: "n " + id,
    value: true,
    email: id + "@"
  });
  //return axios.get(API_URL + "?id=" + id, { headers: authHeader() });
  //return axios.get(API_URL + "&id=" + id, { headers: authHeader() }).then((r) => r.data);
  return CommunicationService.doGet(API_URL + "&id=" + id);
};

const postClient = (client) => {
  //return axios.post(API_URL, client, { headers: authHeader() });
  return Promise.resolve(true);
};

export default {
  getClientList,
  getClient,
  postClient
};
