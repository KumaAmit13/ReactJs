import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Comments from './components/comments'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Comments/>
    </>
  )
}

export default App
