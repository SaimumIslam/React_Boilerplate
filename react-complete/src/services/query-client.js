import { QueryClient } from "@tanstack/react-query";
import handleError from "services/handle-error";

const onError = (error) => {
  const { status, data } = error?.response || {};
  handleError(status, data?.detail);
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, //if error happend
      cacheTime: 0, //mS
      refetchOnWindowFocus: false,
      // notifyOnChangeProps: ["data", "error"],
      onError: onError,
    },
    mutations: {
      retry: 1, //if error happend
      onError: onError,
    },
  },
});

export default queryClient;
