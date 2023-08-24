// import React from "react";
import PropTypes from "prop-types";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";

import handleFetchError from "./error-handling/fetch-error";
import handleFormError from "./error-handling/form-error";

const query_client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      cacheTime: 0, //mS
      refetchOnWindowFocus: false,
      // notifyOnChangeProps: ["data", "error"],
      onError: handleFetchError,
    },
    mutations: {
      retry: 0,
      onError: handleFormError,
    },
  },
});

const QueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={query_client}>{children}</QueryClientProvider>
  );
};

QueryProvider.propTypes = {
  children: PropTypes.node,
};

export default QueryProvider;
