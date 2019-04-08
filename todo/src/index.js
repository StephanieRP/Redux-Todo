import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./components/TodoContainer";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import todos from "./reducers/reducers";

const store = createStore(todos);

ReactDOM.render(
  <Provider store={store}>
    <TodoContainer />
  </Provider>,
  document.getElementById("root")
);
