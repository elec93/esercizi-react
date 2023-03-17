import React from 'react'
import {useLogin} from './useLogin'

function Login() {
    const {username, password, handleInputs} = useLogin()
    
  return (
    <div>
        <input onChange={handleInputs} name='username' type="text" value={username}></input>
        <input onChange={handleInputs} name='password' type="password" value={password}></input>
       <div>{username}</div>
       <div>{password}</div>

    </div>
  )
}

export default Login