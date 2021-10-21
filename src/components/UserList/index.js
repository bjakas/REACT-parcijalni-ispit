import { useState, useEffect } from 'react';

export default function UserList(props) {
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

  if (error !== null) { return <div>Sorry, there has been an error while retrieving data...</div> };
  if (user === null) { return <div>Data is loading...</div> };
  if (repo === null) { return <div>No repositories to show!</div> };

  return (
    <div>
      <p>User login is: <b>{user.login}</b></p>
      <img src={user.avatar_url} alt={user.name} />
      <p>User name is: <b>{user.name}</b> </p>
      <p>User is located at: <b>{user.location}</b></p>
      <p>User has: <b>{user.followers} followers</b></p>
      <p>User is following: <b>{user.following} other users</b></p>
      <div>Repositories:
        {repo.map((item) =>
          <ul>
            <li id={item.id}>{item.name}</li>
          </ul>
        )}
      </div>
    </div>
  );
}