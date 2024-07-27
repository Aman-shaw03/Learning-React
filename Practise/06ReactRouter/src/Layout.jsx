import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
      <>
      <Header/>
      <Outlet/>
      <Footer/>
      </>
  )
}

export default Layout
//The <Outlet> component in React Router acts as a placeholder for child routes within a parent route.