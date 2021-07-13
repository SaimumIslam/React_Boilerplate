import React, { useState } from "react";
import { useQuery } from "react-query";

import styles from "./index.module.css";
import { getUser } from "services/api/test";

const Counter = () => {
  const [state, setstate] = useState(false);

  const { data, status, error } = useQuery("user", () => getUser(2), {
    enabled: state,
  });
  console.log(data, error?.response);
  return (
    <div>
      <span className={styles.value}>{status}</span>
      <div className={styles.row}>
        <button className={styles.asyncButton} onClick={() => setstate(true)}>
          Load users
        </button>
      </div>
    </div>
  );
};
export default Counter;
