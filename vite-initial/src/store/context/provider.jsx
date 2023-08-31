import PropTypes from "prop-types";
import { UserProvider } from "./user";

const ContestProvider = ({ children }) => <UserProvider>{children}</UserProvider>;

ContestProvider.propTypes = {
  children: PropTypes.node,
};
export default ContestProvider;
