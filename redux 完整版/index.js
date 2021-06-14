import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";

ReactDOM.render(<App />, document.querySelector("#root"));
store.subscribe(() => {
  ReactDOM.render(<App />, document.querySelector("#root"));
});
