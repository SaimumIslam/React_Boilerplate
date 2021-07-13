import Routes from "routes";
import { QueryClientProvider } from "react-query";

import StoreProvider from "store/store-provider";
import queryClient from "services/query-client";

function App() {
  return (
    <StoreProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </StoreProvider>
  );
}

export default App;
