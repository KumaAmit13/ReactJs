import React  from 'react'
import { useState,useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    // console.log(React.createContext());
    const[userName,setUserName]= useState("");
    const[password,setPassword  ]= useState("");

    const {setUser}=useContext(UserContext)
    console.log(useContext(UserContext));
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({userName, password})
    }
    return (
        <>
        <div>
            <h2>loging</h2>
            <input type="text" placeholder='username' value={userName}
            onChange={(e)=>setUserName(e.target.value)}/>
            <input type="password" name="" id="Password" value={password} 
            onChange={(e)=>setPassword(e.target.value)}/>
            <button  onClick={handleSubmit}>Submit</button>
        </div>
        </>
    )
}

export default Login
