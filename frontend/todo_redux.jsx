import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store.js";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  const root = document.getElementById("content");

  ReactDOM.render(<h1>Todos App</h1>, root);
});
