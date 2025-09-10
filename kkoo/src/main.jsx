import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Home from './componenet/Home.jsx'
import About from './componenet/About.jsx'
import Login from './componenet/Login.jsx'
import Register from './componenet/Register.jsx'
import Error from './componenet/Error.jsx'

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,

    children:[
      {
    path:"home",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"login",
    element:<Login/>,
  },
  {
    path:"register",
    element:<Register/>
  },
    ]

  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
