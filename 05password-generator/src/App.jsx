import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [numAllow, setnumAllow] = useState(false)
  const [charAllow, setcharAllow] = useState(false)
  const [password, setpassword] = useState("")


  // we want a func that will generate "password" and that password need to be in cache between renders , so we can change it and use it without rendering again and again
  // we can use "useCallback" hook that takes a func and dependencies

  // using useRef hook for copying data to clipboard

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow) str += "0123456789"
    if (charAllow) str += "{}[](),./<>?+-$%#@!^&*`~"

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1) 
      pass += str.charAt(char)
      // console.log(pass)
 
    }
    setpassword(pass)

  },[length, numAllow, charAllow , setpassword])

  // useCallback works like => if some thing /value have been changed in these dependencies then store the dependencies value in cache , for smooth functioning and optimising the program like length change hua toh store the new value in cache same for numallow , charallow and similarly same for setPassword 

  const copypasswordtoClip = useCallback(()=>{
    passwordRef.current ?.select()
    // we are using optional select "?" so if the value is "null" , it work then 
    passwordRef.current?.setSelectionRange(0,12)
    window.navigator.clipboard.writeText(password)
    // since we know react will be render in browser and it has window object , so we can access it but in case of Next.js we have to server side rendering
  }, [password] )
  // jis jis se baat hogi (link) usko usecallback ke dependencies me rakho so to store it in cache/memory for optimizing

  useEffect(()=>{
    passwordGenerator()
  },[length, numAllow,charAllow,passwordGenerator])
  // useeffect works like => if these dependencies have changed something , then re run the passwordGen(), totally different from useCallback

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">

      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">

      <input
      type="text"
      value={password}
      className="outline-none w-full py-1 px-3"
      placeholder="Password"
      readOnly
      ref={passwordRef}
      // taking the ref from the input box (where we want)
      />
      <button
      onClick={copypasswordtoClip}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >copy</button>
        
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={30}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}}/>
        <label>Length: {length}</label>
      </div>
      <div
      className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked= {numAllow}
        id='numberInput'
        onChange={()=>{
          setnumAllow((prev)=>!prev);
          // since on change require a call back func we set "setnumAllow" with the another function so it change values everytime 
          // like previous value(true) => not previous value(false)
          }} />
        <label htmlFor="numberInput">Number</label>
      </div>
      <div
      className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked= {charAllow}
        id='CharAllow'
        onChange={()=>{
          setcharAllow((prev)=>!prev);
          }} />
        <label htmlFor="CharAllow">Character</label>
      </div>
    </div>
    </div>
  )
}

export default App
