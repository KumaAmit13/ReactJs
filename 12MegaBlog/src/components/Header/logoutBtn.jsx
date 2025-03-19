import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auto'
import {logout} from '../../store/authSlice'
import { Navigate, useNavigate } from 'react-router-dom';

function LogoutBtn() {

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
            localStorage.setItem("profilePhoto",null)
            navigate("/login")
        }).catch((e)=>console.log(e));
    }

    return (
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full' onClick={logoutHandler}>
            Logout
        </button>
    )
}

export default LogoutBtn
