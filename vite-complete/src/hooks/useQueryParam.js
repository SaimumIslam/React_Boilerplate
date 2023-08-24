
import React from "react";
import JSURL from "jsurl";
import { useSearchParams } from "react-router-dom";

function useQueryParam(key) {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramValue = searchParams.get(key);

  const value = React.useMemo(() => JSURL.parse(paramValue), [paramValue]);

  const setValue = React.useCallback(
    (newValue, options) => {
      let newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(key, JSURL.stringify(newValue));
      setSearchParams(newSearchParams, options);
    },
    [key, searchParams, setSearchParams]
  );

  return [value, setValue];
}

export default useQueryParam;
