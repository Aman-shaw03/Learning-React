import React, {useEffect, useState} from 'react'
import { useDispatch } from "react-redux"
import authservices from './appwrite/Auth'
import {login, logout} from './store/authSlice'
import {Header, Footer} from "./components"
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  //logic :- since we are taking data from appwrite using the services we created , sometime it will take time 
  // to give us the data, so industry standard code practise is to create a state for this loading , so if 
  // loading is True means we dont have the data and we will use useEffect to get the data

  const dispatch = useDispatch()

// using the service created to getcurrentUser and getting data , then dispatching it to login/logout action created on authSlice while setting store and then since we got data , we set the Loading False 
  useEffect(() => {
    authservices.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  // conditionally rendering here if Loading = False (means we get the data perform this action )  other wise 
  // null but !loading(meant that if loading which is initially set as "true" is "false" or not)
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}
// mf i forget to add the outlet and misplace the <main> component

export default App
