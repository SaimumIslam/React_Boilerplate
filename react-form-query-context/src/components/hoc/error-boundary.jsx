import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Fallback } from "components/templates/errors";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return <Fallback message={error?.message} reset={resetErrorBoundary} />;
};

function MyErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => console.log(error, info)}
    >
      {children}
    </ErrorBoundary>
  );
}

export default MyErrorBoundary;
