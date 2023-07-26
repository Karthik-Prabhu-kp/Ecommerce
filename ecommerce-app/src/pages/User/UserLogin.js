import React, { useState, useContext } from 'react'
import axios from "axios";
import { useData } from '../../context/dataContext';
import { ACTION_TYPE } from '../../utils/constants';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


function UserLogin() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {token,dataDispatch} = useData();
  const { loginClicked } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Login</h2>
      <label>Email:</label>
      <input onChange={(event) => setEmail(event.target.value)}  name="email"/>
      <label>Password:</label>
      <input onChange={(event) => setPassword(event.target.value)} name="password" />
      <button onClick={() => loginClicked(email,password)}>Sign in</button>
      <p onClick={() => navigate("/UserSignup")}>Create Account</p>
    </div>
  )
}

export default UserLogin