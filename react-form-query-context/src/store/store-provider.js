import { UserProvider } from "store/contexts/user";

const StoreProvider = ({ children }) => (
  <UserProvider>
   {children}
  </UserProvider>
);

export default StoreProvider;
