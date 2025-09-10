import { lazy, Suspense, useState, useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import { Outlet, Link } from "react-router-dom";
// import Lazy from './componenet/Lazy'
const User=lazy(()=>import("./componenet/Lazy"))


function App() {
  const [load, setLoad] = useState(false)
  const[pending,startTrantiontion]=useTransition()


  const handleClick=()=>{
    startTrantiontion(async()=>{
      await new Promise(res=>setTimeout(res,2000));

    })
  }


  return (
    <>
    <NavBar/>
    <Outlet/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={()=>{setLoad(true)}}>click me</button>
      {load?
      <Suspense fallback={<h3>loadin.....</h3>}>
        <User/>
      </Suspense>
      :null
      }

      <button disabled={pending} onClick={handleClick}>click</button>


    </>
  )
}

export default App
