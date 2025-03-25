import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'
import AddPost from './pages/AddPosts.jsx'
import EditPost from './pages/EditPost.jsx'
import PasswordReset from './pages/PasswordReset.jsx'

import Signup from './pages/Signup'
import Post from "./pages/Post";

import AllPosts from "./pages/AllPosts";
import Dashboard from './components/Dashboard.jsx'
import EditProfilePhoto from './pages/EditProfilePhoto.jsx'
import HelpSupport from './pages/HelpandSupport.jsx'
import PrivacyPolicy from './pages/PrivacyAndPolicy.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        )
      },
      {
        path: "/help",
        element: (
          <AuthLayout>
            <HelpSupport />
          </AuthLayout>
        )
      },
      {
        path: "/policy",
        element: (
          <AuthLayout>
            <PrivacyPolicy/>
          </AuthLayout>
        )
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout >
            {" "}
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            {""}
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
      {
        path: "/dashboard",
        element: (
          <AuthLayout authentication>
            <Dashboard />
          </AuthLayout>)
      },
      {
        path: "/edit",
        element: (
          <AuthLayout authentication>
            <EditProfilePhoto />
          </AuthLayout>)
        
      },
      {
        path:"/forgotPassword",
        element:(
          <AuthLayout authentication>
            <PasswordReset/>
          </AuthLayout>
        )
      }
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
