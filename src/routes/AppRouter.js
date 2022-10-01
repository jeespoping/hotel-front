import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { startChecking } from "../actions/auth";

import LayoutBasic from "../layouts/LayoutBasic/LayoutBasic";
import Auth from "../Pages/Auth/Auth";
import HotelPage from "../Pages/HotelPage";
import List from "../Pages/List";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {
  const dispatch = useDispatch();

  const { checking, res } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return null;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={Auth}
            isAuthenticated={!!res}
          />

          <PrivateRoute
            path="/dashboard"
            component={LayoutBasic}
            isAuthenticated={!!res}
          />

          <Route exact path="/" component={List} />

          <Route exact path="/:hotel" component={HotelPage} />
        </Switch>
      </div>
    </Router>
  );
}
