import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import store from "./store/store.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import {AuthLayout} from './components/index.js'
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
        element: <Home />
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login/>
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication = {false}>
            <Signup/>
          </AuthLayout>
        )
      },
      {
        path: "/allpost",
        element: (
          <AuthLayout authentication >
            {" "}
            <Allpost/>
          </AuthLayout>
        )
      },
      {
        path: "/editpost/:slug",
        element: (
          <AuthLayout authentication>
            {" "}
            <Editpost/>
          </AuthLayout>
        )
      },
      {
        path: "/post/:slug",
        element: (
          <AuthLayout authentication >
            {" "}
            <Post/>
          </AuthLayout>
        )
      },
      {
        path: "/addpost",
        element: (
          <AuthLayout authentication >
            {" "}
            <Addpost/>
          </AuthLayout>
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
