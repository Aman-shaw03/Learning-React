import React, {useEffect, useState} from 'react'
import { Container, Post_Form } from '../components'
import appwriteServices from '../appwrite/Config'
import { useNavigate, useParams } from 'react-router-dom'
import { set } from 'react-hook-form'

// what will happen .. when user want to edit post ..it will clickon that and go to the post through URL so we will use useparams to get that value and navigate 
function Editpost() {
    const [post, setPosts] = useState(null)
    const navigate = useNavigate()
    const {slug} = useParams()
    useEffect(() => {
        if(slug){
            appwriteServices.getPost(slug).then((post) => {
                if (post) setPosts(post)})
        } else{
    navigate("/")}
    },[slug, navigate])
// if we find slug in the URL then we can access that with useParams and useEffect will execute and will getPost with that slug and set the state to the Posts

  return post ? (
    <div className='py-8'>
        <Container>
            <Post_Form post={post}/>
        </Container>
    </div>
  ) : null
}

export default Editpost