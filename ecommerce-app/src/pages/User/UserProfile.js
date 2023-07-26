import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

function UserProfile() {

    const {logoutClicked,user} = useContext(AuthContext)
    // const [profileToggle,setProfileToggle] = useState(true);
    const [activeTab,setActiveTab] = useState("profile");

    const handleTabToggle = (tab) => {
      setActiveTab(tab);
    };

  return (
    <div>
      <h2>Account</h2>
      <button onClick={() => handleTabToggle('profile')}>Profile</button>
      <button onClick={() => handleTabToggle('address')}>Address</button>
      
      {activeTab === "profile"  ? 
        <div>
          <h3>User Details</h3>
          <p>Name: {user.firstName} {user.lastName}</p>
          <p>Email: {user.email}</p>
          <button onClick={logoutClicked}>Log out</button>
        </div> : 
        <div>
          <h3>User Address</h3>
          
        </div>}
    </div>
  )
}

export default UserProfile