import { useState, useCallback } from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [numAllow, setnumAllow] = useState(false)
  const [charAllow, setcharAllow] = useState(false)
  const [password, setpassword] = useState("")
  // we want a func that will generate "password" and that password need to be in cache between renders , so we can change it and use it without rendering again and again
  // we can use "useCallback" hook that takes a func and dependencies

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow) str += "0123456789"
    if (charAllow) str += "{}[](),./<>?+-$%#@!^&*`~"

    for (let i = 1; i <= Array.length; i++){
      let char = (Math.floor(Math.random() * str.length) + 1) 
      pass = str.charAt(char)
 
    }
    setpassword(pass)

  },[length, numAllow, charAllow , setpassword])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        placeholder='password'
        className='py-2 px-3 w-full outline-none mb-4'
        readOnly
        />
      </div>
     </div>
    </>
  )
}

export default App
