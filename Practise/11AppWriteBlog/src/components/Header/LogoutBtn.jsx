import React from 'react'
import {useDispatch} from "react-redux"
import authservices from '../../appwrite/Auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const buttonHandler = ()=> {
        authservices.logOut()
        .then(dispatch(logout()))
        .catch()
    }
    // using Appwrite Auth Service , which provided a promise so we use .then and .catch and 
    //in .then we dispatch that to authSlice store's logout function
  return (
    <div 
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={buttonHandler}
    >
        LogOut
    </div>
  )
}

export default LogoutBtn