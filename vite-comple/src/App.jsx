// import ReactGA from "react-ga4";

import { ThemeProvider } from "@mui/material/styles";

import SnackbarProvider from "components/__providers/snackbar-provider";
import Routes from "routes";
import QueryProvider from "services/query-provider";
import defaultTheme from "themes/default";

// ReactGA.initialize(process.env.import.meta.env.VITE_GOOGLE_ANLYTICS_TRAKING_ID);

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SnackbarProvider>
        <QueryProvider>
          <Routes />
        </QueryProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
