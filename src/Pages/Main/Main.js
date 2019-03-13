import React from "react";
import { Link } from "react-router-dom";

import CounterProvider from "../../Provider/CounterProvider";
import Counter from "../../Components/Counter/Counter";

const Main = () => (
  <>
    <CounterProvider
      render={({ count, handleIncrementCounter, handleDecrementCounter }) => (
        <Counter
          count={count}
          handleIncrementCounter={handleIncrementCounter}
          handleDecrementCounter={handleDecrementCounter}
        />
      )}
    />
    <Link to="/history">History</Link>
  </>
);

export default Main;
