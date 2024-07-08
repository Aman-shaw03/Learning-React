import React , {useCallback} from 'react'
import {RTE, Input, Button, Select} from '../index'
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import { useForm } from 'react-hook-form'
import appwriteService from "../../appwrite/config"


function PostForm({post}) {
  const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active",
    }
  })

  const navigate = useNavigate()
  const userData =  useSelector(state => state.user.userData)

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ?appwriteService.uploadFile(data.image[0]) : null

      if(file){
        appwriteService.deleteFile(post.featureImage)
      }
      const dbpost = await appwriteService.updatePost(post.$id,{
        ...file,
        featuredImage: file ? file.$id :undefined,
      })
      if (dbpost) {
        navigate(`/post/${dbpost.$id}`)
      }
      
    
    } else{
      
    }
  }


  return (
    <div></div>
  )
}

export default PostForm