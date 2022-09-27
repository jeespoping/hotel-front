import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../Pages/Auth/Auth";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            patch="/"
            element={<PublicRoute isAuthenticated={false} />}
          >
            <Route exact path="/" element={<Auth />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
