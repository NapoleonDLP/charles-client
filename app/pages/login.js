import React, {useEffect, useState} from 'react';

export default function Login() {
  const [login, setLogin] = useState(false);
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();

  const handleSubmit = (event) => {

  }

  const handleChange = (event) => {

  }

  return (
    <div>
      <h1>Login</h1>
    <form className='login-form' onSubmit={handleSubmit}>
      <label>
        <input onChange={handleChange} placeholder='Username' value={userName} type='text' name='username'/>
      </label>
      <label>
        <input onChange={handleChange} placeholder='Password' value={password} type='text' name='password' />
      </label>
      <input type='button' value='Submit' name='submit' />
    </form>
    </div>
  )
};
