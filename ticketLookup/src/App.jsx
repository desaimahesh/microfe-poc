import React from "react";
import ReactDOM from "react-dom";
import TicketLookup from "./Components/TicketLookup";

import "./index.scss";

const App = () => (
  <div>
    <TicketLookup />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
