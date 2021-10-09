import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useUserContext } from "store/contexts/user";

const ProtectedRoute = ({ children, redirectTo, ...rest }) => {
  const { isLogin } = useUserContext();

  if (isLogin) {
    return <Route {...rest}>{children}</Route>;
  }

  return <Redirect to={redirectTo} />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
ProtectedRoute.defaultProps = {
  redirectTo: "/login",
};

export default ProtectedRoute;
