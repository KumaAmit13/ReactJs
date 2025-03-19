import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
  let Name="hitseh";

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>
        Tailwind Css test
      </h1>

      <Card  username={Name} btnText="clickMe"/>
      <Card username="Chai or Code" btnText="vist me"/>
    </>
  )
}

export default App
