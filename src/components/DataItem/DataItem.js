import React from "react";
import "./DataItem.scss";
import PropTypes from "prop-types";

const DataItem = ({ item }) => <p className="data__text">{item}</p>;

DataItem.propTypes = {
  item: PropTypes.string.isRequired
};

export default DataItem;
