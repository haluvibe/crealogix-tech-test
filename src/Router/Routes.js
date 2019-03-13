// Root.js
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "../Pages/Main/Main";
import History from "../Pages/History/History";
import NotFound from "../Pages/NotFound/NotFound";

export const ROOT_PATH = "/";
export const HISTORY_PATH = "/history";

const Routes = () => (
  <Switch>
    <Route exact path={ROOT_PATH} component={Main} />
    <Route exact path={HISTORY_PATH} component={History} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
