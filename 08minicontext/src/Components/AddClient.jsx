import React, { useContext, useState } from 'react'
import clienContext from '../context/ClientContext';

function AddClient() {
    const[clientName,setClientName]=useState("a");
    const[password,setPassword]=useState("123");
    const {setClient}=useContext(clienContext);
    function handle(e){
        e.preventDefault()
        setClient({clientName,password});
    }


    return (
        <>
        <input type="text" placeholder='ClientName' 
        onChange={(e)=>{setClientName(e.target.value)}}/>
        <input type="password" placeholder='password' 
        onChange={(e)=>{setPassword(e.target.value)}}/>

        <button onClick={handle}>Save</button>
        </>
    )
}

export default AddClient
