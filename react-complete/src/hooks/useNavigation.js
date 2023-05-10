import { useCallback } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

function useQuery() {
  const searchParams = new URLSearchParams(useLocation().search);
  const paramsObject = {};
  for (const [key, value] of searchParams) {
    paramsObject[key] = value;
  }
  return paramsObject;
}

const useNavigation = () => {
  const query = useQuery();
  const params = useParams();

  const navigate = useNavigate();
  const { pathname, hash } = useLocation();

  const primaryPath = pathname?.split("/")[1] || "";
  const secondaryPath = pathname?.split("/")[2] || "";
  const hashParam = hash?.split("#")[1] || "";
  const isUpdate = secondaryPath === "update" ? true : false;

  const setPath = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );

  const backPath = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return {
    hash: hash,
    query: query,
    params: params,
    path: pathname,
    primaryPath: primaryPath,
    secondaryPath: secondaryPath,
    isUpdate: isUpdate,
    hashParam: hashParam,
    setPath: setPath,
    backPath: backPath,
  };
};

export default useNavigation;
