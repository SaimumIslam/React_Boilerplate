// import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PropTypes from "prop-types";

import handleFetchError from "./error-handling/fetch-error";
import handleFormError from "./error-handling/form-error";

const query_client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      networkMode: "online",
      refetchOnWindowFocus: false,
      // notifyOnChangeProps: ["data", "error"],
      onError: handleFetchError,
    },
    mutations: { retry: 0, networkMode: "online", onError: handleFormError },
  },
});

const QueryProvider = ({ children }) => {
  return <QueryClientProvider client={query_client}>{children}</QueryClientProvider>;
};

QueryProvider.propTypes = { children: PropTypes.node };

export default QueryProvider;
