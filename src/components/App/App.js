import React, { Component } from "react";
import Header from "../Header/Header";
import ArticleDecoration from "../ArticleDecoration/ArticleDecoration";
import Data from "../Data/Data";
import Footer from "../Footer/Footer";
import data from "../../data/data";
class App extends Component {
  state = {
    paragraphs: [...data.paragraphs],
    sentences: [...data.sentences],
    words: [...data.words],
    counter: 0,
    type: "paragraphs"
  };

  sendForm = e => {
    e.preventDefault();
    console.log(this.state.counter);
  };

  getCounter = e => {
    this.setState({ counter: e.target.value });
  };

  getType = e => {
    this.setState({ type: e.target.value });
  };

  render() {
    return (
      <main className="main">
        <section className="app">
          <Header />
          <ArticleDecoration />
          <form className="form" onSubmit={this.sendForm}>
            <input
              type="number"
              min="0"
              className="form__input"
              onChange={this.getCounter}
              value={this.state.counter}
            />
            <select
              name="type"
              className="form__select"
              onChange={this.getType}
              value={this.state.type}
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
            <button type="submit" className="form__button">
              generate
            </button>
          </form>
          <Footer />
        </section>
        <Data
          paragraphs={this.state.paragraphs}
          sentences={this.state.sentences}
          words={this.state.words}
        />
      </main>
    );
  }
}

export default App;
