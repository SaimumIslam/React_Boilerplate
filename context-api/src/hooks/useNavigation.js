import { useCallback } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

const useNavigation = () => {
  const params = useParams();
  const { pathname } = useLocation();
  const { push, goBack, replace } = useHistory();

  const primaryPath = pathname?.split("/")[1] || "";
  const secondaryPath = pathname?.split("/")[2] || "";
  const isUpdate = secondaryPath === "update" ? true : false;

  const setPath = useCallback(
    (path) => {
      push(path);
    },
    [push]
  );

  const backPath = useCallback(() => {
    goBack();
  }, [goBack]);

  const replacePath = useCallback(
    (path) => {
      replace(path);
    },
    [replace]
  );

  const refresh = useCallback(
    (path) => {
      replace(pathname);
    },
    [replace, pathname]
  );

  return {
    params: params,
    path: pathname,
    primaryPath: primaryPath,
    secondaryPath: secondaryPath,
    isUpdate: isUpdate,
    refresh: refresh,
    setPath: setPath,
    backPath: backPath,
    replacePath: replacePath,
  };
};

export default useNavigation;
