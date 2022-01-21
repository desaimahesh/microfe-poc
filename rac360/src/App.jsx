import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";

import "./index.scss";
import Login from "login/Login";
import { StoreProvider } from "store/store";
import TicketLookup from "ticketLookup/TicketLookup";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const App = () => (
  <div className="mx-10">
    <Header />
    <Login />
    <TicketLookup />
  </div>
);
ReactDOM.render(
  <StoreProvider>
    {" "}
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
