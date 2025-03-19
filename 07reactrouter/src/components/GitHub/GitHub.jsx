import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function GitHub(){
    // const[data,setData]=useState([]);
    // useEffect(()=>
    // {
    // fetch("https://api.github.com/users/KumaAmit13")
    // .then((res)=>res.json())
    // .then((data)=>{console.log(data);
    //     setData(data)})
    // },[])

    const data=useLoaderData();
    
    return(
        <>
        <div className="text-center m-4 pb-2 text-3xl gap-3  bg-gray-600 text-white">
           <span> Github Name  : </ span> <span>{data.login}</span>
            <div>

           </div>
            <img src={data.avatar_url} alt="gitImg" width="300px" /> 
        </div>
        </>
    )
}

export const githubInfoLoader= async ()=>{
   const response =await fetch("https://api.github.com/users/KumaAmit13");
   return response.json();
}