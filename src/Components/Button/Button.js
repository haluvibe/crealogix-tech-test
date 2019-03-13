import React from "react";
import PropTypes from "prop-types";

const Button = ({ handleClick, value }) => (
  <button onClick={() => handleClick()}>{value}</button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Button;
