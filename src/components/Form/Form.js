import React, { Component } from "react";
import "./Form.scss";

class Form extends Component {
  state = {
    counter: 0,
    type: "paragraphs"
  };

  sendForm = e => {
    e.preventDefault();
  };

  getCounter = e => {
    this.setState({ counter: e.target.value });
  };

  getType = e => {
    this.setState({ type: e.target.value });
  };

  render() {
    return (
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
    );
  }
}

export default Form;
