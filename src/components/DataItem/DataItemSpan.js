import React from "react";
import PropTypes from "prop-types";

const DataItemSpan = ({ item }) => <span className="data__text">{item}</span>;

DataItemSpan.propTypes = {
  item: PropTypes.string.isRequired
};

export default DataItemSpan;
