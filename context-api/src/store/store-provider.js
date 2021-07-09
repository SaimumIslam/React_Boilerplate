import { CounterProvider } from "store/contexts/counter";
import { UserProvider } from "store/contexts/user";

const StoreProvider = ({ children }) => (
  <UserProvider>
    <CounterProvider>{children}</CounterProvider>
  </UserProvider>
);

export default StoreProvider;
