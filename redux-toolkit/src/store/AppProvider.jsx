import { Provider } from "react-redux";
import { reduxStore } from "store/redux";

const AppProvider = ({ children }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

export default AppProvider;
