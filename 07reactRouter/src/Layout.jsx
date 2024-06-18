import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/footer'
import { Outlet } from 'react-router-dom'

// if we use like Header and footer in every page just the "Home" elements should change as per different 
// Routing Pages => we use Outlet from React Router DOM

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
