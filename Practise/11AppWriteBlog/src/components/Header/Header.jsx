import React from 'react'
import {Logo, LogoutBtn, Container } from "../index"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector( (state) => state.auth.status)
  // we checked status here from AuthSlice
  // will use those for displaying nav items in Header like a Login person shouldnt see login, signup in header
  const navigate = useNavigate()

  // if we dont use navitems which takes all the header item in a array , we have to create separte buttons for everyone
  // and check with whether its active or not , and adding another items will be hard 
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
      // meant active all the time 
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
      // active when authStatus not true = false
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus
      // active when authStatus not true = false
    },
    {
      name: "All Post",
      slug: "/all-post",
      active: authStatus
    },
    {
      name: "Add post",
      slug: "/add-post",
      active: authStatus
    },
  ]


  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to="/">
              <Logo width='70px'/>
            </Link>
          </div>

          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button 
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                  {item.name}
                </button>
              </li>
            ) : null
            )}
            
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header