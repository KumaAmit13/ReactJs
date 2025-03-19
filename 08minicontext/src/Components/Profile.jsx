import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user}=useContext(UserContext);
    console.log(user);
    if(!user) return  <div>please Login...</div>

    return <div>Welcome {user.userName}</div>
    
}

export default Profile
