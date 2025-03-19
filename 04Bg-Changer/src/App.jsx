import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let colors="Ovlive";
  const [color, setColor] = useState("olive");


  return (
    <>
    <div className='flex flex-wrap h-screen w-screen flex-col  justify-end text-center items-center' style={{backgroundColor: color}} id='container'>
      <div className=' flex flex-wrap md:flex-nowrap w-screen md:w-min gap-4 bottom-7  border-4 rounded-2xl border-gray-400 bg-gray-400 text-black'>
      <button onClick={()=>setColor("Red")} style={{backgroundColor:"red"}} className='h-9 w-19 outline-none '>Red</button>
      <button onClick={()=>setColor("green")} style={{backgroundColor:"green"}} className='h-9 w-19 '>Green</button>
      <button onClick={()=>setColor("Blue")} style={{backgroundColor:"blue"}} className='h-9 w-19 '>Blue</button>
      <button onClick={()=>setColor("Olive")} style={{backgroundColor:"olive"}} className='h-9 w-19 '>Olive</button>
      <button onClick={()=>setColor("gray")} style={{backgroundColor:"gray"}} className='h-9 w-19 '>Gray</button>
      <button onClick={()=>setColor("Yellow")} style={{backgroundColor:"yellow"}} className='h-9 w-19 '>Yellow</button>
      <button onClick={()=>setColor("Pink")} style={{backgroundColor:"Pink"}} className='h-9 w-19 '>Pink</button>
      <button onClick={()=>setColor("Purple")} style={{backgroundColor:"purple"}} className='h-9 w-19 '>Purple</button>
      <button onClick={()=>setColor("White")} style={{backgroundColor:"White"}} className='h-9 w-19 '>White</button>
      <button onClick={()=>setColor("Black")} style={{backgroundColor:"Black"}} className='h-9 w-19 text-white'>Black</button>
      </div>
    </div>
    </>
  )
}

export default App
