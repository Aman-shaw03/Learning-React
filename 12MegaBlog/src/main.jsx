import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Login, authLayout} from "./components/index.js"
import Signup from "./pages/Signup.jsx"
import AllPost from "./pages/AllPost.jsx"
import AddPost from "./pages/AddPost.jsx"
import EditPost from "./pages/EditPost.jsx"
import Home from "./pages/Home.jsx"
import Post from "./pages/Post.jsx"


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
          <authLayout authentication= {false}>
            <Login/>
          </authLayout>
        )
      },
      {
        path: "/Signup",
        element: (
          <authLayout authentication={false}>
            <Signup/>
          </authLayout>
        )
      },
      {
        path: "/all-posts",
        element: (
            <authLayout authentication>
                {" "}
                <AllPost />
            </authLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
            <authLayout authentication>
                {" "}
                <AddPost />
            </authLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
            <authLayout authentication>
                {" "}
                <EditPost />
            </authLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
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
