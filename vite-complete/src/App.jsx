// import ReactGA from "react-ga4";

import { ThemeProvider } from "@mui/material/styles";

import SnackbarProvider from "components/__providers/snackbar-provider";
import Routes from "routes";
import defaultTheme from "themes/default";
import StateProvider from "store/provider";
import QueryProvider from "services/query-provider";

// ReactGA.initialize(process.env.import.meta.env.VITE_GOOGLE_ANLYTICS_TRAKING_ID);

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SnackbarProvider>
        <QueryProvider>
          <StateProvider>
            <Routes />
          </StateProvider>
        </QueryProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
