import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPost] = useState([])

    useEffect(() => {
        appwriteService.getPost().then((posts) => {
            if(posts){
                setPost(posts.documents)
            }
        })
    },[])
  return (
    <div>Home</div>
  )
}

export default Home