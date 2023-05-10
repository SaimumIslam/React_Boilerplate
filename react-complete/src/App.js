import Routes from "routes";

import StoreProvider from "store/store-provider";

function App() {
  return (
    <StoreProvider>
      <Routes />
    </StoreProvider>
  );
}

export default App;
