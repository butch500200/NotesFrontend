import React, { useState } from 'react';
import loginService from '../services/login.js';

// eslint-disable-next-line react/prop-types
function LoginForm({ setUser, setErrorMessage }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username, password,
      });
      console.log(user);
      setUser(user);
      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user));
      setUsername('');
      setPassword('');
    } catch (exception) {
      console.log('in the catch block');
      setErrorMessage('wrong credentials');
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );
}

export default LoginForm;
