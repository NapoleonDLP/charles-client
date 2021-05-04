import React, {useEffect, useState} from 'react';

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [user, setUser] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:3001/authentication', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
    //TODO: Adjust format to conform to the state. ex string with response vs user model, Idea. Return an json and have
    //keys equal isLoggedIn and user?
    .then(user => {
      setUser(user);
      setIsLoggedIn(true);
    })
    .catch((error) => console.error('Error: '.error))
  }

  const handleChange = (event) => {
    event.preventDefault();

    setCredentials({...credentials,  [event.target.name]: event.target.value});
  }

  return (
    <div>
      <h1>Login</h1>
    <form className='login-form' onSubmit={handleSubmit}>
      <label>
        <input onChange={handleChange} placeholder='email' value={credentials.email} type='text' name='email'/>
        <input onChange={handleChange} placeholder='Password' value={credentials.password} type='text' name='password' />
      </label>
      <input type='submit' name='submit' />
    </form>
    </div>
  )
};
