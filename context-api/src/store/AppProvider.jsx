import { CounterProvider } from "store/contexts/counter";

const AppProvider = ({ children }) => (
  <CounterProvider>{children}</CounterProvider>
);

export default AppProvider;
