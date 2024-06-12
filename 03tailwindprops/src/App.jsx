import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "chai_Biscuit",
    age: 24
  }
  let myArr = [5,8,9]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl'>Tailwind Test</h1>

      <Card channel = "ToastyBoy" btntext={"Kothibanglacheck"} />
      <Card channel = "Margaraite" />

    </>
  )
}

export default App
