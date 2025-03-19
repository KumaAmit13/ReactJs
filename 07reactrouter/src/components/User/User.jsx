import React from "react";
import { useParams } from "react-router-dom";
export default function User(){
    const {userID}=useParams();
    console.log(userID);
    return(
        
        <div className="bg-gray-500 text-3xl flex justify-center">
            User :{userID}
        </div>
        
    );
}