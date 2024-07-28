import React, {useState} from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [Username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const buttonHandler = (e) => {
        e.preventDefault()
        setUser({Username, password})
    }
  return (
    <>
        <input
         type='text'
         value={Username}
         onChange={(e) => setUsername(e.target.value)}
         placeholder='UserName'/> 
         {" "}   
        <input
         type='text'
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder='Password'/>
         <button onClick={buttonHandler}>Submit</button>    
    </>
  )
}

export default Login