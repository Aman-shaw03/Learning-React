import authService from "./appwrite/auth"
import React ,{ useState, useEffect } from 'react'
import {useDispatch} from "react-redux"
import './App.css'
import { logIn,logOut } from "./store/authSlice"
import { Header, Footer } from "./components"
import { Outlet } from 'react-router-dom'


function App() {

  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(logIn({userData}))
      } else{
        dispatch(logOut())
      }
    })
    .finally(() => setLoading(false))
  },[])
// useEffect use krke currentuser laya and check kiya , if there is userData => then dispatch it to login else logout
// agar userData hai ya nhi , dono time hi state update ho rha hai
// fir finally setLoading = false so we can render some Loading screen aur data in FE

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          TODO: <Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
