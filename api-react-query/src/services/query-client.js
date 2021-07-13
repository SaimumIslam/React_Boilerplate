import { QueryClient } from "react-query";
import handleError from "utils/handleError";

const onError = (error) => {
  const { status, data } = error?.response || {};
  handleError(status, data);
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, //if error happend
      cacheTime: 0, //mS
      refetchOnWindowFocus: false,
      onError: onError,
    },
    mutations: {
      retry: 1, //if error happend
      onError: onError,
    },
  },
});

export default queryClient;
