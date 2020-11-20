import React from "react";
import DataItem from "../DataItem/DataItem";
import DataItemSpan from "../DataItem/DataItemSpan";
import "./Data.scss";
import data from "../../data/data";

const Data = ({ counter, option }) => {
  const sentences = [...data.sentences];
  const paragraphs = [...data.paragraphs];
  const words = [...data.words];

  if (option === "paragraphs") {
    return (
      <section className="data">
        <h2 className="data__title">
          {counter == 0
            ? `Your page is empty!`
            : `You generated ${counter} paragraphs`}
        </h2>
        {paragraphs.slice(0, counter).map((paragraph, index) => (
          <DataItem item={paragraph} key={index} />
        ))}
      </section>
    );
  } else if (option === "sentences") {
    return (
      <section className="data">
        <h2 className="data__title">
          {counter == 0
            ? `Your page is empty!`
            : `You generated ${counter} sentences`}
        </h2>
        {sentences.slice(0, counter).map((sentence, index) => (
          <DataItem item={sentence} key={index} />
        ))}
      </section>
    );
  } else {
    return (
      <section className="data">
        <h2 className="data__title">
          {counter == 0
            ? `Your page is empty!`
            : `You generated ${counter} words`}
        </h2>
        {words.slice(0, counter).map((word, index) => (
          <DataItemSpan item={word} key={index} />
        ))}
      </section>
    );
  }
};

export default Data;
