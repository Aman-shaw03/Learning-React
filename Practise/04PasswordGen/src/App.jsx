import { useState, useRef,useCallback, useEffect } from 'react'

import './App.css'

function App() {
  const[length, setLength] = useState(8)
  const[charAllow, setCharAllow] = useState(null)
  const[numAllow, setnumAllow] = useState(null)
  const[password , setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllow) str+= "0123456789"
    if(charAllow) str+= "{}[](),./<>?+-$%#@!^&*`~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  },[length, charAllow,numAllow, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current ?.select()
    passwordRef.current ?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length, charAllow, numAllow, passwordGenerator])
  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
     <h1 className='text-white text-center my-3'>Password generator</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input 
        type="text"
        value={password}
        readOnly
        ref={passwordRef}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
       />
       <button 
       onClick={copyPassword}
       className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
        Copy
       </button>
     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
          type="range"
          min={8}
          max={35}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}} />
          <label >Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
         type="checkbox"
         defaultChecked = {numAllow}
         id='numberInput'
         onChange={() => {
          setnumAllow((prev) => !prev)
         }}/>
        <label htmlFor="numberInput">Numbers</label>
        <input 
         type="checkbox"
         defaultChecked = {charAllow}
         id='characterInput'
         onChange={() => {
          setCharAllow((prev) => !prev)
         }} />
        <label htmlFor="characterInput">Characters</label>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
