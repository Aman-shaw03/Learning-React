import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from '../src/Context/UserContextProvider'
import LogIn from './Components/LogIn'
import Message from './Components/Message'


function App() {


  return (
    <UserContextProvider>
      <h1>React winning</h1>
      <LogIn />
      <Message />
    </UserContextProvider>
  )
}

export default App
