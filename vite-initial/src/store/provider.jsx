import PropTypes from "prop-types";

import ContextProvider from "./context/provider";

const StateProvider = ({ children }) => <ContextProvider>{children}</ContextProvider>;

StateProvider.propTypes = {
  children: PropTypes.node,
};

export default StateProvider;
