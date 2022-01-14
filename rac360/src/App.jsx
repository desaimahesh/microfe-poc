import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";

import "./index.scss";
import Login from "login/Login";
import { StoreProvider } from "store/store";

const App = () => (
  <div className="mx-10">
    <Header />
    <Login />
  </div>
);
ReactDOM.render(
  <StoreProvider>
    {" "}
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
