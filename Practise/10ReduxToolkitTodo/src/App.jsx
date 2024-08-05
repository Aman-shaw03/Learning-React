import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
      <div>Learning Redux Toolkit</div>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
