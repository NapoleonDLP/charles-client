import React, {useEffect, useState} from 'react';

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();


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
        <input onChange={handleChange} placeholder='Username' value={credentials.username} type='text' name='username'/>
      </label>
      <label>
        <input onChange={handleChange} placeholder='Password' value={credentials.password} type='text' name='password' />
      </label>
      <input type='button' value='Submit' name='submit' />
    </form>
    </div>
  )
};
