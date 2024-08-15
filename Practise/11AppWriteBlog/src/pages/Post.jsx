import React, {useState, useEffect} from 'react'
import appwriteServices from '../appwrite/Config'
import {useNavigate , useParams, Link} from "react-router-dom"
import {Container, Buttons} from "../components"
import {useSelector} from "react-redux"
import parse from "html-react-parser"


function Post() {
  const [post, setPost] = useState(null)
  const navigate = useNavigate()
  const {slug} = useParams()
  const userData = useSelector((state) => state.auth.userData)

  useEffect(() => {
    if(slug){
      appwriteServices.getPost(slug).then((post) => {
        if(post) setPost(post)
        else navigate("/")
  })} else navigate("/")
  },[slug, navigate])

  // think of it like :- if we get data in post through useEffect and if there is userData then check it ,
  // if both id are same so (true) both will execute otherwise keep it false which means dont execute
  const isAuthor = post && userData ? post.userId === userData.$id : false ;

  const deleteButtonHandler = () => {
    appwriteServices.deletePost(post.$id).then((status) => {
      if(status) {
        appwriteServices.deleteFile(post.featuredImage)
        navigate("/")
      }
    })
  }
  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">

          <img src={appwriteServices.getFilePreview(post.featuredImage)} alt={post.title} className='rounded-xl' />
        
          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Buttons bgColor="bg-green-500" className="mr-3">
                  Edit
                </Buttons>
              </Link>
              <Buttons bgColor="bg-red-500" 
              onClick = {deleteButtonHandler} >
                Delete
              </Buttons>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null
}

export default Post