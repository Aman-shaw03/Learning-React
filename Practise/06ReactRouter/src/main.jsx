import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {createBrowserRouter, createRoutesFromElements,  RouterProvider, Route} from "react-router-dom"
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, {GithubInfoLoader} from './Components/Github/Github.jsx'
import MyGithub, {mygithubInfoLoader} from './Components/myGithub/MyGithub.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="user/:UserID" element={<User/>} />
      <Route
       loader={GithubInfoLoader}
       path= "Github"
       element = {<Github/>}
       />
      <Route
       loader={mygithubInfoLoader}
       path='MyGithub'
       element={<MyGithub/>} />
    </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
// The <Outlet> component in React Router acts as a placeholder for child routes within a parent route.