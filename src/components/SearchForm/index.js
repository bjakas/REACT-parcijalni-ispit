import { useState } from "react";
import "./SearchForm.css";
import PropTypes from 'prop-types';

export default function SearchForm({ getInputFieldData }) {
  const [searchFormState, setState] = useState({ text: '' });

  const handleOnChange = (event) => {
    setState({ text: event.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    getInputFieldData(searchFormState.text);
  };

  const header = "GitHub user search";
  const label = "GitHub username:";
  const goButton = "GO!";
  const resetButton = "RESET";

  const handleReset = (event) => {
    event.preventDefault();
    getInputFieldData("");
  }

  return (
    <div>
      <h1>{header}</h1>
      <form className="SearchForm" onSubmit={handleOnSubmit}>
        <label>{label}</label>
        <input
          className="SearchForm__row"
          name="text"
          type="text"
          placeholder="e.g. facebook"
          onChange={handleOnChange}
          value={searchFormState.text}
        >
        </input>
        <button
          className="goButton"
          type="submit"
        >
          {goButton}
        </button>
        <button
          className="resetButton"
          type="reset"
          onClick={handleReset}
        >
          {resetButton}
        </button>
      </form>
    </div>
  );
}

SearchForm.propTypes = {
  getInputFieldData: PropTypes.func
};