import "preact/debug";

import { render } from "preact";

import App from "./App.jsx";
import Header from "./Header.jsx";

import "./index.css?inline'";

render(
  <>
    <Header />
    <App />
  </>,
  document.getElementById("root")
);
