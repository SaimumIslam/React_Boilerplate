import { Provider } from "react-redux";
import { reduxStore } from "store/redux";

const StoreProvider = ({ children }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

export default StoreProvider;
