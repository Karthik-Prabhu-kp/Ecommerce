import React, { useContext,useState } from 'react'
import { AuthContext } from '../../context/AuthContext';

function UserSignup() {

  const {signupClicked} = useContext(AuthContext)
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  return (
    <div>
      <h2>Create your Account</h2>
      <label>First Name:</label>
      <input onChange={(event) => setFirstName(event.target.value)}  name="firstName"/>
      <label>Last Name:</label>
      <input onChange={(event) => setLastName(event.target.value)}  name="lastName"/>
      <label>Email:</label>
      <input onChange={(event) => setEmail(event.target.value)}  name="email"/>
      <label>Password:</label>
      <input onChange={(event) => setPassword(event.target.value)} name="password" />
      <button onClick={() => signupClicked(firstName,lastName,email,password)}>Sign in</button>
    </div>
  )
}

export default UserSignup