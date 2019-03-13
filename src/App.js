// index.js
import React from "react";
import { Provider } from "react-redux";

//local imports
import Router from "./Router/Router";
import store from "./store/store";

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
