import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { startChecking } from "../actions/auth";
import LayoutBasic from "../layouts/LayoutBasic/LayoutBasic";
import Auth from "../Pages/Auth/Auth";
import DashboardRoutes from "./DashboardRoutes";
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
            path="/"
            component={LayoutBasic}
            isAuthenticated={!!res}
          />
        </Switch>
      </div>
    </Router>
  );
}
