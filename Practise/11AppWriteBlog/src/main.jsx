import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import store from "./store/store.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import authLayout from './components/index.js'
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Allpost from "./pages/Allpost.jsx"
import Editpost from "./pages/Editpost.jsx"
import Post from "./pages/Post.jsx"
import Addpost from "./pages/Addpost.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: (
          <authLayout authentication = {false}>
            <Login/>
          </authLayout>
        )
      },
      {
        path: "/signup",
        element: (
          <authLayout authentication = {false}>
            <Signup/>
          </authLayout>
        )
      },
      {
        path: "/allpost",
        element: (
          <authLayout authentication >
            {" "}
            <Allpost/>
          </authLayout>
        )
      },
      {
        path: "/editpost/:slug",
        element: (
          <authLayout authentication>
            {" "}
            <Editpost/>
          </authLayout>
        )
      },
      {
        path: "/post/:slug",
        element: (
          <authLayout authentication >
            {" "}
            <Post/>
          </authLayout>
        )
      },
      {
        path: "/addpost",
        element: (
          <authLayout authentication >
            {" "}
            <Addpost/>
          </authLayout>
        )
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
