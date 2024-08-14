import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// it acts as a protection to our routes, pages
// i name this jsx file in small letter (authLayout) where names start should be capital
export default function Protected({children , authentication = true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } else if(!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    },[authStatus, authentication, navigate])


    return loader? <h1>...Loading</h1> : <>{children}</>
  
}

