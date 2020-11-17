import React from "react";
import "./Data.scss";

const Data = () => {
  return (
    <section className="data">
      <h2 className="data__title">
        You generated 0 paragraphs
        <span className="data__copy">copy</span>
      </h2>
      {/* <h2 className="data__title hidden">Your page is empty!</h2> */}
    </section>
  );
};

export default Data;
