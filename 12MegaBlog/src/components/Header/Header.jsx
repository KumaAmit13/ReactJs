import React, { useEffect } from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
    const authStatus=useSelector((state)=>state.auth.status);//getting data from store
    const navigate=useNavigate();
    useEffect(()=>{
        
    },[])
    
    const navItems=[
        {
            name: 'Home',
            slug: "/",//url path
            active: true
          }, 
          {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "MyAccount",
            slug: `/dashboard`,
            active: authStatus
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]
    return (
       <header className='py-3 bg-gray-500 shadow max-w-screen'>
        <Container>
            <nav className='flex'>
                <div className='mr-4 '>
                    <Link to='/'>
                    <Logo width='70px'/>
                    </Link>
                </div>
                <ul className='flex ml-auto max-w-screen flex-wrap gap-1 '>
                    {navItems.map((item)=>
                    item.active ? 
                    (
                        <li key={item.name}>
                            <button onClick={()=>navigate(item.slug)}
                                className='inline-block px-6 py-2 mr-3
                                duration-200 hover:bg-blue-100 rounded-full'>{item.name}</button>
                        </li>
                     ) : null
                    )}

                    {authStatus && (
                        <li>
                            <LogoutBtn/>
                        </li>
                    )}
                </ul>
            </nav>
        </Container>

       </header>
    )
}

export default Header
