import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./style/globalStyle";
import Routers from "./Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Routers />
    <GlobalStyle />
  </React.StrictMode>
);
