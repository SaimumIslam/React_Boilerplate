import ReduxProvider from "./redux/provider";

const StateProvider = ({ children }) => <ReduxProvider>{children}</ReduxProvider>;

export default StateProvider;
