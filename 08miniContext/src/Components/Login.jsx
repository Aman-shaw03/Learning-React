import React, {useState , useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [UserName, setUserName] = useState("")
    const [password, setpassword] = useState("")
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUserName({UserName, password})
    }

    return (
        <div>
            <h2>Log in</h2>
            <input type="text" 
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='username' />

            <input type="text" 
            value= {password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
