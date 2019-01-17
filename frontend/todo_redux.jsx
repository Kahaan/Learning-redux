import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store.js";
import App from "./components/app.jsx";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  const root = document.getElementById("content");

  ReactDOM.render(<App />, root);
});
