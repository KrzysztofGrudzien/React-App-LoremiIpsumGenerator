import React, { useState } from "react";
import Header from "../Header/Header";
import ArticleDecoration from "../ArticleDecoration/ArticleDecoration";
import Data from "../Data/Data";
import Footer from "../Footer/Footer";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [option, setOption] = useState("paragraphs");

  const handleOnChangeCounter = e => setCounter(e.target.value);
  const handleOnChangeOption = e => setOption(e.target.value);

  return (
    <main className="main">
      <section className="app">
        <Header />
        <ArticleDecoration />
        <form className="form">
          <input
            type="number"
            min="0"
            className="form__input"
            onChange={handleOnChangeCounter}
            value={counter}
          />
          <select
            name="type"
            className="form__select"
            onChange={handleOnChangeOption}
            value={option}
          >
            <option value="paragraphs" className="form__option">
              paragraphs
            </option>
            <option value="sentences" className="form__option">
              sentences
            </option>
            <option value="words" className="form__option">
              words
            </option>
          </select>
        </form>
        <Footer />
      </section>
      <Data counter={counter} option={option} />
    </main>
  );
};

export default App;
