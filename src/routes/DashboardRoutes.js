import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";

export default function DashboardRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/dashboard" component={Home} />
      </Switch>
    </>
  );
}
