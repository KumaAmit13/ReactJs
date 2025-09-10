import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const [loader, setloader] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);
    console.log("auto1 ",authStatus)
    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            // console.log(authStatus)
            navigate("/login")
        } 
        else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        else {
            setloader(false)

        }
    }, [authStatus, navigate, authentication])
    return loader ? <h1>Loading......</h1> : <>{children}</>
}

