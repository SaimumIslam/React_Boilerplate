import React, { useCallback, useState } from "react";
import { useCounterContext } from "store/contexts/counter";
import styles from "./index.module.css";


const Counter = () => {
  const {
    count,
    increment,
    decrement,
    incrementByAmount,
    incrementAsync,
    resetCount,
  } = useCounterContext();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  const incrementIfOdd = useCallback(
    (amount) => {
      if (count % 2 === 1) {
        incrementByAmount(amount);
      }
    },
    [count, incrementByAmount]
  );

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={decrement}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={increment}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={incrementByAmount.bind(this, incrementValue)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={incrementAsync.bind(this, incrementValue)}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={incrementIfOdd.bind(this, incrementValue)}
        >
          Add If Odd
        </button>
        <button className={styles.button} onClick={resetCount}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default Counter;
