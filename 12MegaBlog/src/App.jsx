import { useEffect, useState } from 'react'
import { Outlet, Link, useNavigation, NavLink } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { login,logout } from "./store/authSlice"
import authService from './appwrite/auto'
import './App.css'
import conf from './conf/conf'
import { Footer, Header } from './components'

function App() {
  const[loading, setloading]=useState(true);
  const dispatch=useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      }
      else{
        dispatch(logout());
      }
    })
    .finally(()=> setloading(false))
  },[])


  return !loading ?(
    <>
    <div className='min-h-screen w-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
         <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
    </>
  ):null
}

export default App
