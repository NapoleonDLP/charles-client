import React, { useState, useEffect } from 'react';

export default function Signup() {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    slug:'',
    password: ''
  });

  const handleChange = (event) => {
    setUser({...user, [event.target.name] : event.target.value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success: ', data)
      })
    .catch((error) => console.error('Error: '. error));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Sign-up
      </label>
        <input onChange={handleChange} type='text' name='first_name' className='form-field' placeholder='First Name' values={user.first_name} />
        <input onChange={handleChange} type='text' name='last_name' className='form-field' placeholder='Last Name' values={user.last_name} />
        <input onChange={handleChange} type='text' name='email' className='form-field' placeholder='Email' values={user.email} />
        <input onChange={handleChange} type='text' name='slug' className='form-field' placeholder='Slug' values={user.slug} />
        <input onChange={handleChange} type='text' name='password' className='form-field' placeholder='Password' values={user.password} />
        {(user.first_name && user.last_name && user.email && user.password) ? <input type='submit' value='Submit'/> : null}
    </form>
  )
};
