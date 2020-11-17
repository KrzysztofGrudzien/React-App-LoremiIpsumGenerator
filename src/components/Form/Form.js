import React, { Component } from "react";
import "./Form.scss";

class Form extends Component {
  render() {
    return (
      <form className="form">
        <input type="number" min="0" className="form__input" value="0" />
        <select name="type" className="form__select">
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
