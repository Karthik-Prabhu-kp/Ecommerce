import React, { useState } from 'react'
import axios from "axios";
import { useData } from '../../context/dataContext';
import { ACTION_TYPE } from '../../utils/constants';


function UserLogin() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {token,dataDispatch} = useData();

  const clickHandler = async () => { 
      try {
        const {data: response} = await axios.post('/api/auth/login', {
          email: `${email}`,
          password: `${password}`,
        });
        localStorage.setItem("token", response.encodedToken)
        dataDispatch({
          type:ACTION_TYPE.GET_AUTH_TOKEN,
          payload: response.encodedToken
        }) 
      } catch (error) {
        console.error(error); // Handle any errors
      }
    };

  return (
    <div>
      <h2>Login</h2>
      <label>Email:</label>
      <input onChange={(event) => setEmail(event.target.value)}  name="email"/>
      <label>Password:</label>
      <input onChange={(event) => setPassword(event.target.value)} name="password" />
      <button onClick={clickHandler}>Sign in</button>
      <p>Create Account</p>
    </div>
  )
}

export default UserLogin