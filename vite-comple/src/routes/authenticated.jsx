// import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

import useUserStore from "store/user";

const Authenticated = ({ is_authenticated, redirect_to, children }) => {
  const { isLogin } = useUserStore();

  if (!is_authenticated) {
    return <>{children}</>;
  }

  if (isLogin) {
    return <>{children}</>;
  }

  return <Navigate to={redirect_to} replace={true} />;
};

Authenticated.propTypes = {
  children: PropTypes.node,
  redirect_to: PropTypes.string,
  is_authenticated: PropTypes.bool,
};
Authenticated.defaultProps = { redirect_to: "/login", is_authenticated: false };

export default Authenticated;
