import UserList from "./components/UserList";
import SearchForm from "./components/SearchForm";
import { useState } from 'react';
import './index.css';

function App() {
  const [userState, setUserState] = useState(null);

  const handleOnSubmit = (choosenUser) => {
    setUserState(choosenUser);
  }

  return (
    <div className="App">
      <SearchForm getInputFieldData={handleOnSubmit}></SearchForm>
      {userState && <UserList user={userState}></UserList>}
    </div>
  );
}

export default App;
