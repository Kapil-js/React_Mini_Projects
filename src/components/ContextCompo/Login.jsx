import React, { useState, useContext } from 'react'
import UserContext from '../../ContextApi/UserContext'
import '../../app.css'

function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
  e.preventDefault()
  setUser({ username, password })
}


  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <h2>Login</h2>
        <input
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder='username'
          style={{color: '#000'}}
        />
        <input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='password'
          style={{color: '#000'}}
        />
        <br />
        <button className='submit_handle' onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default Login
