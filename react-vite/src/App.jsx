// import React from "react";
// import ReactGA from "react-ga4";

import { ThemeProvider } from "@mui/material/styles";

import StateProvider from "store/provider";
import QueryProvider from "services/query-provider";
import SnackbarProvider from "components/__providers/snackbar-provider";

import defaultTheme from "themes/default";

import Routes from "routes";

// ReactGA.initialize(process.env.import.meta.env.VITE_APP_GOOGLE_ANALYTICS_TRAKING_ID);

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
