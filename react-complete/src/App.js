import React from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material/styles";

import SnackbarProvider from "components/hoc/snackbar-provider";
import StoreProvider from "store/store-provider";

import queryClient from "services/query-client";
import defaultTheme from "themes/default";

import AppRoute from "routes";

function App() {
  return (
    <StoreProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <SnackbarProvider>
            <AppRoute />
          </SnackbarProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </StoreProvider>
  );
}

export default App;
