import React from "react";
import { render } from "react-dom";
import ContainerMain from "./components/container";
import rootReducer from "./components/Reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./styles.css";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <ContainerMain />
  </Provider>,
  rootElement
);
