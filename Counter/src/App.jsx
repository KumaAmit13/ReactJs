import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let count=15;
  // console.log(count);
  let [count,setCounter]=useState(15);

  let incresseCount=function (){
    console.log(count)
    // count=count+1;
    setCounter(count+1);
  }
  let  deceresseCount=function(){
    console.log(count);
    // count= count-1; 
    setCounter(count-1)
  }
  return (
    <>
    <h1>Chai Or Code</h1>
    <h2>The count is : {count}</h2>
    <button onClick={incresseCount}>Incresse {count}</button>
    <br/>
    <button onClick={deceresseCount}>Deceresse {count}</button>
    <br/>
    <p>Footer : {count}</p>
    </>
  )
}

export default App
