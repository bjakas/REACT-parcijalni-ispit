import { useState, useEffect } from 'react';
import './UserList.css';

export default function UserList(props) {
  const [typedInUser, setUser] = useState([]);
  const [userError, setUserError] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [repositoriesError, setRepositoriesError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.user}`)
      .then((response) => {
        if (response.ok) return response.json();
        else {
          setUserError(response);
        }
      })
      .then(json => setUser(json))
      .catch(userError => setUserError(userError))

    fetch(`https://api.github.com/users/${props.user}/repos`)
      .then(response => response.json())
      .then(json => setRepositories(json))
      .catch(repositoriesError => setRepositoriesError(repositoriesError));
  }, [props.user]); // gledamo usera

  if (userError !== null || repositoriesError !== null) { return <div className="error-message">Sorry, user you choose doesn't exist. Try with another input.</div> };
  if (typedInUser === null || repositories === null) { return <div className="data-message">Data is loading...</div> };

  return (
    <div>
      <div>
        <img className="avatar" src={typedInUser.avatar_url} alt={typedInUser.login} />
        <p><b>User:</b> {typedInUser.name}</p>
        <p><b>Location:</b> {typedInUser.location}</p>
        <p><b>Bio:</b> {typedInUser.bio}</p>
        <p><b>User has:</b> {typedInUser.followers} followers</p>
        <p><b>User is following:</b> {typedInUser.following} other users</p>
      </div>
      <div>
        <table>
          <caption><u>Repositories:</u></caption>
          <tbody>
            {/* {repositories.map((item, index) => (
              <tr key={index}>
                <td id={item.id}>{item.name}</td>
              </tr>
            )
            )} */}
            {repositories.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}