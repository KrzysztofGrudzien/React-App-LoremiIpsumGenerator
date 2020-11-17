import React, { Component } from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import ArticleDecoration from "../ArticleDecoration/ArticleDecoration";
import Data from "../Data/Data";
import Footer from "../Footer/Footer";
import data from "../../data/data";
class App extends Component {
  state = {
    paragraphs: [...data.paragraphs],
    sentences: [...data.sentences],
    words: [...data.words]
  };
  render() {
    return (
      <main className="main">
        <section className="app">
          <Header />
          <ArticleDecoration />
          <Form />
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
