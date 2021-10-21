import { useState } from "react";
import UserList from "../UserList";

export default function SearchForm(props) {
  const [searchFormState, setState] = useState({ text: '' });

  const handleOnChange = (event) => {
    setState({ text: event.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    UserList(searchFormState);
  };

  return (
    <div>
      <h1>User search:</h1>
      <form onSubmit={handleOnSubmit}>
        <label>GitHub username:
          <input
            name="text"
            type="text"
            placeholder="e.g. facebook"
            onChange={handleOnChange}
            value={searchFormState.text}
          >
          </input>
        </label>
        <button
          type="submit"
        >
          GO!
        </button>
      </form>
    </div>
  );
}

