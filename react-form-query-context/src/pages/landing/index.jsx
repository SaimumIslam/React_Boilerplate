import React, { useState } from "react";
import { useQuery } from "react-query";

import { getUser } from "services/api";
import { useUserContext } from "store/contexts";
import useNavigation from "hooks/useNavigation";

import styles from "./index.module.css";

const Landing = () => {
  const { setPath } = useNavigation();

  const [state, setstate] = useState(false);
  const { isLogin, setLogin, setUser } = useUserContext();

  const { data, status, error } = useQuery("user", () => getUser(2), {
    enabled: state,
    onSuccess: (data) => {
      const user = data?.data;
      setLogin(true);
      setUser(user);
    },
  });

  console.log(data, error, isLogin);

  if (status === "loading")
    return <span className={styles.value}>{status}</span>;

  return (
    <div>
      <span className={styles.value}>{isLogin ? "Login" : "Not login"}</span>
      <div className={styles.row}>
        <button className={styles.asyncButton} onClick={() => setstate(true)}>
          Load users
        </button>
      </div>
      <button className={styles.button} onClick={() => setPath("/signup")}>
        Route to create user
      </button>
    </div>
  );
};
export default Landing;
