import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
// import App from './App.jsx'
import Root from './Root.jsx'
import { About, Home,Contact,User, GitHub} from './components/index.js'
import { githubInfoLoader } from './components/GitHub/GitHub.jsx'

const root=createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"Contactus",
        element:<Contact/>
      },
      {
        path:"user/:userID",
        element: <User/>
      },
      {
        path:"git",
        element:<GitHub/>
      }
      ,
      {
        path:"gitHub",
        element:<GitHub/>,
        loader:githubInfoLoader
      }
    ]
  },

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={root}/>
  </StrictMode>,
)
