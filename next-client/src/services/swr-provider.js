import handleFetchError from "./error-handling/fetch-error";
import { SWRConfig } from "swr";

function SwrProvider() {
  return (
    <SWRConfig
      value={{
        onError: (error, key) => {
          // handleError(status, data?.detail);

          if (error.status !== 403 && error.status !== 404) {
            // We can send the error to Sentry,
          }
        },
      }}
    ></SWRConfig>
  );
}

export default SwrProvider;
