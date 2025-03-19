import React, { useEffect, useState } from "react";
import authService from "../appwrite/auto";
import { useNavigate, useSearchParams } from "react-router-dom";


export default function PasswordReset() {
    const [searchParams]=useSearchParams();
    // const userID=searchParams.get("userId");
    authService.getCurrentUser()
    .then((user)=>{
      user.$id;
    })
    const secret=searchParams.get("secret");

    const[newPassword,setnewPassword]=useState(null);
    const[confirmPassword,setconfirmPassword]=useState(null);
    const[oldPassword,setoldPassword]=useState(null);
    const[isEqual,setIsEqual]=useState(true);

    const navigate=useNavigate();
    useEffect(()=>{
        if(newPassword===confirmPassword){
         setIsEqual(true);
        }
        else{
            setIsEqual(false);
                }
    },[newPassword,confirmPassword])
    
    const onSubmit=(e)=>{
        e.preventDefault();
    //    isEqual && authService.passwordRecovery(userID,secret,newPassword)
    //    .then((response)=>{
    //     console.log("password updated...",response);
    //     navigate("/login");
        
    // })
    //    .catch((error)=>{
    //     console.log("password not update : ",error);
    //    });
          isEqual && authService.updatePassword(newPassword,oldPassword)
          .then((data)=>{console.log("result ",data)
            navigate("/login")
          })
          .catch((error) (console.log("not upadte ",error)));

    }
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-96 p-6 bg-black rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold text-center mb-4">Reset Password</h2>
        <input
          type="password"
          placeholder="New Password"
          className={`${isEqual ? null:"border bg-rose-700"}w-full p-2 mb-2 border rounded-md`}
          onChange={(e)=>{setconfirmPassword(e.currentTarget.value)}}

        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 mb-4 border rounded-md"
          onChange={(e)=>{setnewPassword(e.currentTarget.value)}}
        />
      
         <input
          type="password"
          placeholder="old Password"
          className="w-full p-2 mb-4 border rounded-md"
          onChange={(e)=>{setoldPassword(e.currentTarget.value)}}
        />
        <button className="w-full bg-blue-600 text-white p-2 rounded-md" onClick={onSubmit}>
          Reset Password
        </button>
      </div>
    </div>
  );
}
