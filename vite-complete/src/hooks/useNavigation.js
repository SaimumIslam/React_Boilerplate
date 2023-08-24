import { useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function useQuery() {
  const search_params = new URLSearchParams(useLocation().search);
  const params_object = {};
  for (const [key, value] of search_params) {
    params_object[key] = value;
  }
  return params_object;
}

const useNavigation = () => {
  const query = useQuery();
  const params = useParams();

  const navigate = useNavigate();
  const { pathname, hash } = useLocation();

  const hash_param = hash?.split("#")[1] || "";
  const primary_pathname = pathname?.split("/")[1] || "";
  const secondary_pathname = pathname?.split("/")[2] || "";
  const is_update = secondary_pathname === "update" ? true : false;

  const setPath = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate],
  );

  const backPath = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return {
    hash: hash,
    query: query,
    params: params,
    pathname: pathname,
    primary_pathname: primary_pathname,
    secondary_pathname: secondary_pathname,
    is_update: is_update,
    hash_param: hash_param,
    setPath: setPath,
    backPath: backPath,
  };
};

export default useNavigation;
