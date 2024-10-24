import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-700'>
        <div className='bg-gray-800 text-white'>
          <h1>React Revision</h1>
        </div>
      </div>
    </>
  )
}

export default App
