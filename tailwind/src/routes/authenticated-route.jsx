import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useUserRedux } from "store/redux/user";

const AuthenticatedRoute = ({ children, redirectTo, ...rest }) => {
  const { isLogin } = useUserRedux();

  if (isLogin) {
    return <Route {...rest}>{children}</Route>;
  }

  return <Redirect to={redirectTo} />;
};

AuthenticatedRoute.propTypes = {
  children: PropTypes.node,
};
AuthenticatedRoute.defaultProps = {
  redirectTo: "/login",
};

export default AuthenticatedRoute;
