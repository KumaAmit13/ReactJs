import React from 'react'
import {useRouteError} from "react-router-dom"

function Error() {
    const error=useRouteError();
    console.log(error)
    return (
        <>
        <div>
            <div style={{fontSize:'5rem',backgroundColor:'red'}}>
                404
            </div>
            <p>{error.message}</p>
        </div>
        </>
    )
}

export default Error
