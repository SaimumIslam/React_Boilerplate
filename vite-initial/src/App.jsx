// import ReactGA from "react-ga4";


import Routes from "routes";
import StateProvider from "store/provider";
import QueryProvider from "services/query-provider";

// ReactGA.initialize(process.env.import.meta.env.VITE_GOOGLE_ANLYTICS_TRAKING_ID);

function App() {
  return (
      <QueryProvider>
        <StateProvider>
          <Routes />
        </StateProvider>
      </QueryProvider>
  );
}

export default App;
