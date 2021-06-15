import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";

ReactDOM.render(<App />, document.querySelector("#root"));
/* 监测redux状态的改变  若状态改变 重新渲染页面 */
store.subscribe(() => {
  ReactDOM.render(<App />, document.querySelector("#root"));
});
