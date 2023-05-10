import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useUserRedux } from "store/redux/user";

const AuthenticatedRoute = ({ is_authenticated, redirectTo, children }) => {
  const { isLogin } = useUserRedux();

  if (!is_authenticated) {
    return <>{children}</>;
  }

  if (isLogin) {
    return <>{children}</>;
  }

  return <Navigate to={redirectTo} replace />;
};

AuthenticatedRoute.propTypes = {
  children: PropTypes.node,
  is_authenticated: PropTypes.bool,
};
AuthenticatedRoute.defaultProps = {
  redirectTo: "/login",
  is_authenticated: false,
};

export default AuthenticatedRoute;
