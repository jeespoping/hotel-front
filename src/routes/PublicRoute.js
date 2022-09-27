import React from "react";
import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute({ isAuthenticated }) {
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
}

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
