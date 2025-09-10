import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from '../component/login'
import Register from '../component/Register'
import About from '../component/about'
import Navbar from './Navbar'



function App() {
 const route=createBrowserRouter([
        {
          path:"/home",
          element:<div>home</div>
        },
        {
          path:"/login",
          element:Login
        },
        {
          path:"/register",
          element:Register
        },
        {
          path:"/about/:name",
          element:About
        }

      ])
      
      

  
  // costly()
  return (
    <>
    <Navbar/>
    uhh
    
    </>
  )
}

export default App
