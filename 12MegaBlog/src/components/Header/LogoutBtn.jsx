import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/authSlice'
import authservice from "../../appwrite/config"


function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        // appwrite ke yeh methods , ek promise hai => so we can use .then , .catch with it
        authservice.logOut().then(
            dispatch(logOut())
        )
    }
  return (
    <button 
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
        LogOut
    </button>
  )
}

export default LogoutBtn