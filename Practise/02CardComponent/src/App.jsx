import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  console.log(props)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl'>Created Card Component</h1>

      <Card channelName="MariaDB" btnText='Profile dekhoge'/>
      <Card channelName='SunDB' btnText='Profile dekhlo'/>
      <Card channelName="MoonDB"/>
      
    </>
  )
}

export default App
