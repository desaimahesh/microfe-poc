import React from "react";
import ReactDOM from "react-dom";
import Login from "./Components/Login";
import "./index.scss";
import {StoreProvider} from "store/store";
const App = () => (
    <Login />
);
ReactDOM.render(<StoreProvider> <App /></StoreProvider>, document.getElementById("app"));
