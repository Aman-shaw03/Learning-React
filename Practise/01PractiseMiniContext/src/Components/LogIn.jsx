import React,{useContext,useState} from "react";
import UserContext from "../Context/Usercontext"

function LogIn(){
    const [UserName , setUserName] = useState("")
    const [Password , setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handlesubmit = (e) =>{
        e.preventDefault()
        setUser({UserName , Password})
    }
    return(
        <div>
            <input 
            type="text"
            value={UserName}
            placeholder="UserName"
            onChange={(e)=> setUserName(e.target.value)} />
            <input 
            type="text"
            value={Password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handlesubmit}>Submit</button>
        </div>
    )
}
export default LogIn