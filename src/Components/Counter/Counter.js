import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Button from "../Button/Button";

const Counter = ({ handleIncrementCounter, handleDecrementCounter, count }) => {
  return (
    <>
      <Header title="Counter" />
      <div className="current-count">Current Count: {count}</div>
      <div>
        {count !== 10 && (
          <Button
            handleClick={handleIncrementCounter}
            value="Increment Counter"
          />
        )}
        {count !== 0 && (
          <Button
            handleClick={handleDecrementCounter}
            value="Decrement Counter"
          />
        )}
      </div>
    </>
  );
};

Counter.propTypes = {
  handleIncrementCounter: PropTypes.func.isRequired,
  handleDecrementCounter: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};

export default Counter;
