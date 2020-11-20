import React, { Component } from "react";
import Header from "../Header/Header";
import ArticleDecoration from "../ArticleDecoration/ArticleDecoration";
import Data from "../Data/Data";
import Footer from "../Footer/Footer";

class App extends Component {
  state = {
    counter: 0,
    type: "paragraphs"
  };

  getCounter = e => {
    this.setState({ counter: e.target.value });
  };

  getType = e => {
    this.setState({ type: e.target.value });
  };

  sendForm = e => {
    e.preventDefault();
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
        <Data counter={this.state.counter} type={this.state.type} />
      </main>
    );
  }
}

export default App;
