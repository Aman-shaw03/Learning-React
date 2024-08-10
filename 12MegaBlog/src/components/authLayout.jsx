import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Protected({children , authentication = true}) {
    const [loader, setLoader] = useState(true)
    const navigate= useNavigate()
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() =>{
        //simple way , but want to do it in Hard way with authentication
        // if (authStatus == true) {
        //     navigate("/")
        // } else if(authStatus !== true){
        //     navigate("/login")
        // }

        if(authentication && authStatus !== authentication){
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus, navigate, authentication])


  return loader ? <h1>...Loading</h1> : <>{children}</>
}

