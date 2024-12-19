import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./main.scss";
import { inject } from "@vercel/analytics";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

inject();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
