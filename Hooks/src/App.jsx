import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(useState(10));

  function countIncress(){
    for (let index = 0; index < 10; index++) {
      console.log("hii")

      setCount((pre)=>pre+1
    );
      
    }
  }
  return (
    <>
      <button onClick={countIncress}>Incress</button>
      <h1>count is : {count}</h1>
    </>
  )
}

export default App
