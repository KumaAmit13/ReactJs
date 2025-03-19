import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import ClientComponentProvider from './context/ClientComponentProvider'
import AddClient from './Components/AddClient'
import ShowClientDetails from './Components/ShowClientDetails'

function App() {
  

  return (
    <>
    <UserContextProvider>
      <h1>chai</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>

    <ClientComponentProvider>
      <h1>client</h1>
      <AddClient/>
      <ShowClientDetails/>
    </ClientComponentProvider>
    </>
  )
}

export default App
