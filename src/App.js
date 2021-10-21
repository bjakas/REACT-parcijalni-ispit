import { useState, useEffect } from 'react';

function SearchForm(props) {

  return (
    <div>
      <h1>User search</h1>
      <form>
        {/* onSubmit={handleOnSubmit} */}
        <label>GitHub username
          <input
            name="text"
            type="text"
            placeholder="e.g. facebook"
          // onChange={handleOnChange}
          // value={formState.text}
          >
          </input>
          <button
            type="submit"
          // onClick={handleOnChange}
          >
            GO!
          </button>
        </label>
      </form>
    </div>
  );
}

function GithubUserList() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/facebook")
      .then(response => response.json())
      .then(json => setUser(json))
      .catch(error => setError(error))

    fetch("https://api.github.com/users/facebook/repos")
      .then(response => response.json())
      .then(json => setRepo(json))
      .catch(error => setError(error))
  }, []);

  if (error !== null) { return <div>Error!</div> };
  if (user === null) { return <div>Loading...</div> };
  if (repo === null) { return <div>No repos to show!</div> };

  return (
    <div>
      <p>User login is: <b>{user.login}</b></p>
      <img src={user.avatar_url} alt={user.name} />
      <p>User name is: <b>{user.name}</b> </p>
      <p>User is located at: <b>{user.location}</b></p>
      <p>User has: <b>{user.followers} followers</b></p>
      <p>User is following: <b>{user.following} other users</b></p>
      <p>Repo id is: <b>{user.id}</b></p>
      <p>Repo name is: <b>{user.name}</b></p>
    </div>
  );
}


function App() {
  return (
    <div>
      <SearchForm></SearchForm>
      <GithubUserList></GithubUserList>
    </div>
  );
}

export default App;
