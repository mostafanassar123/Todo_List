import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./Pages/Login";
import TodosPage from "./Pages/Todos";

export default () => (
  <Switch>
    <Route path="/" exact component={LoginPage} />

    <Route path="/todos" exact component={TodosPage} />
  </Switch>
);
