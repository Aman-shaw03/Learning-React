import React, {useCallback} from 'react'
import {Buttons, Inputs, RTE, Selects} from "./index"
import appwriteSerices from "../appwrite/Config"
import { useSelector } from 'react-redux'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom'

// logic for this is if there is now data => new data but what if there is already data , so we have to pass that data here so it can modified w((hen they on "edit", this {post} is for that only
export default function Post_Form({post}) {
  const navigate = useNavigate()
  const userData = useSelector(state => state.auth.userData)

  // register holds our data from login and signup, control give control to the RTE and take state , 
  //watch can monitor the fields , setValue is in React Hook form instead of value={} , getValues to get values
  const {register, handleSubmit, control, watch , setValue, getValues} = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.slug || "",
      content : post?.content || "",
      status: post?.status || "active"
    }
  })

  const submit = async(data) => {
    // if there is old post and we want to update the post {1 undefinded is here}
    if(post){
      const file = await data.image[0]? appwriteSerices.uploadFile(data.image[0]) : null
      // if new image is uploaded , then delete the old image from featuredImage
      if(file){
        appwriteSerices.deleteFile(post.featuredImage)
        //featuredImage hold the id of the file 
      }
      // after deleting update the post with new image and data 
      const dbpost = await appwriteSerices.updatePost(post.$id, {...data, featuredImage: file? file.$id : undefined})
      // post is updated , then navigate to that route 
      if (dbpost){
        navigate(`/post/${dbpost.$id}`)
      }
    } else{
      const file = data.image[0]? await appwriteSerices.uploadFile(data.image[0]) : null
      if(file){
        const fileid = file.$id
        data.featuredImage = fileid
        const dbpost = await appwriteSerices.createPost({...data, userId: userData.$id})
        if(dbpost){
          navigate(`/post/${dbpost.$id}`)
        }
      }
    }
  }
  return (
    <div>Post_Form</div>
  )
}
