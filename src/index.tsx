import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faCoffee,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
const queryParams = new URLSearchParams(window.location.search);

if (queryParams.get("layout") === "neon") {
  require("./components/_settings/colors/colors.neon.css");
} else {
  require("./components/_settings/colors/colors.css");
}

library.add(faCheckSquare, faCoffee, faExclamationCircle);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
