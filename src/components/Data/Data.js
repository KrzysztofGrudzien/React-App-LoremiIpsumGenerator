import React from "react";
import DataItem from "../DataItem/DataItem";
import "./Data.scss";

const Data = ({ paragraphs, sentences, words }) => {
  return (
    <section className="data">
      <h2 className="data__title">
        You generated {sentences.length + 1} paragraphs
        <span className="data__copy">copy</span>
        {sentences.map(sentence => (
          <DataItem item={sentence} />
        ))}
      </h2>
      {/* <h2 className="data__title hidden">Your page is empty!</h2> */}
    </section>
  );
};

export default Data;
