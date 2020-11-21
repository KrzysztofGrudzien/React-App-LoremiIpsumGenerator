import React from "react";
import DataItem from "../DataItem/DataItem";
import DataItemSpan from "../DataItem/DataItemSpan";
import "./Data.scss";
import data from "../../data/data";
import PropTypes from "prop-types";

const Data = ({ counter, option }) => {
  const sentences = [...data.sentences];
  const paragraphs = [...data.paragraphs];
  const words = [...data.words];
  const OPTION = option;
  const MAX_LENGTH = counter >= 20 ? (counter = 20) : counter;
  const HEADER =
    counter === 0 ? (
      <h2 className="data__title">Your page is empty!</h2>
    ) : (
      <h2 className="data__title">
        You generated {MAX_LENGTH} {option}
      </h2>
    );

  if (OPTION === "paragraphs") {
    return (
      <section className="data">
        {HEADER}
        {paragraphs.slice(0, MAX_LENGTH).map((paragraph, index) => (
          <DataItem item={paragraph} key={index} />
        ))}
      </section>
    );
  } else if (OPTION === "sentences") {
    return (
      <section className="data">
        {HEADER}
        {sentences.slice(0, MAX_LENGTH).map((sentence, index) => (
          <DataItem item={sentence} key={index} />
        ))}
      </section>
    );
  } else {
    return (
      <section className="data">
        {HEADER}
        {words.slice(0, counter).map((word, index) => (
          <DataItemSpan item={word} key={index} />
        ))}
      </section>
    );
  }
};

Data.propTypes = {
  counter: PropTypes.number.isRequired,
  option: PropTypes.string.isRequired
};

export default Data;
