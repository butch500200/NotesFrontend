import React, { useState, useEffect } from 'react';
import Notification from './components/Notification';
import Footer from './components/Footer';

import LoginForm from './components/LoginForm';
import NoteSection from './components/NoteSection';

function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser');

    if (loggedUserJSON) {
      const storedUser = JSON.parse(loggedUserJSON);
      setUser(storedUser);
    }
  }, []);

  const handLogOut = () => {
    window.localStorage.removeItem('loggedNoteappUser');
    setUser(null);
  };

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      {!user && <LoginForm setUser={setUser} setErrorMessage={setErrorMessage} />}
      {user && (
      <div>
        <p>
          {user.userName}
          {' '}
          logged in
          <button type="button" onClick={handLogOut}>log out</button>
        </p>
        <NoteSection user={user} setErrorMessage={setErrorMessage} />
      </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
