import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();


export const hamburguerService = {
  getLista: (id) =>
    fetch(Api.hamburguerLista(), { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(Api.hamburguerById(id), { method: "GET" }).then(parseResponse),
  create: (id) =>
    fetch(Api.createhamburguer(), { method: "POST" }).then(parseResponse),
  updtateById: (id) =>
    fetch(Api.updatehamburguerById(), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deletehamburguerById(), { method: "DELETE" }).then(parseResponse),
};