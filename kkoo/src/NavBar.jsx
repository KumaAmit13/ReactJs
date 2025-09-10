import React from 'react'
import {Link,Links} from 'react-router-dom'

function NavBar() {
    return (
        <>
        <ul>
            <li>
                <Link to={`/`}>app</Link>
            </li>
            <li>
                <Link to={`/home`}>home</Link>
            </li>
            <li>
                <Link to={`/about`}>about</Link>
            </li>
            <li>
                <Link to={`/login`}>login</Link>
            </li>
            <li>
                <Link to={`/register`}>register</Link>
            </li>
           
            
        </ul>
        </>
    )
}

export default NavBar
