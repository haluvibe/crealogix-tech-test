import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import Header from "../Header/Header";

const List = ({ history }) => {
  return (
    <>
      <Header title="Counter History" />
      <ul>
        {history.map(number => (
          <li key={uuid.v4()}>{number}</li>
        ))}
      </ul>
    </>
  );
};

List.propTypes = {
  history: PropTypes.array.isRequired
};

export default List;
