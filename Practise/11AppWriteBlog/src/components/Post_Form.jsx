import React, {useCallback} from 'react'
import {Buttons, Inputs, RTE, Selects} from "./index"
import appwriteServices from "../appwrite/Config"
import { useSelector } from 'react-redux'
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom'

// logic for this is if there is no data => new data, but what if there is already data , so we have to pass that data here so it can modified when they on using option "edit", this {post} is for that only
export default function Post_Form({post}) {
  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.userData)

  // register holds our data from login and signup, control give control to the RTE and take state , 
  //watch can monitor the fields , setValue is in React Hook form instead of value={} , getValues to get values
  const {register, handleSubmit, control, watch , setValue, getValues} = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content : post?.content || "",
      status: post?.status || "active"
    }
  })

  const submit = async(data) => {
    // if there is old post data and we want to update the post {1 undefinded is here}
    if(post){
      const file = await data.image[0] ? appwriteServices.uploadFile(data.image[0]) : null
      // if new image is uploaded , then delete the old image from featuredImage
      if(file){
        appwriteServices.deleteFile(post.featuredImage)
        //featuredImage hold the id of the file , so delete the old image (file)
      }
      // after deleting update the post with new image and data 
      const dbpost = await appwriteServices.updatePost(post.$id, {...data, featuredImage: file? file.$id : undefined})
      // post is updated , then navigate to that route 
      if (dbpost){
        navigate(`/post/${dbpost.$id}`)
      }
    } else{
      const file = await appwriteServices.uploadFile(data.image[0]);

      if(file){
        const fileid = file.$id
        data.featuredImage = fileid
        const dbpost = await appwriteServices.createPost({...data, userId: userData.$id})

        if(dbpost){
          navigate(`/post/${dbpost.$id}`)
        }
      }
    }
  };


  // todo:- we have 2 input fields (title and slug) we have to "watch" title and generate values in Slug , 
  //replace space in title with "-" ,watch will be in useEffect as a dependencies, and we will use useCallback
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);


// watch keeps on monitor title field and if anything changes , useEffect will execute and recalculate the slu and setValue sets it
  React.useEffect(() => {
    // in watch we get the "value" from register as a object, we get the object from useForm , check the default values
    const subscription = watch((value, { name })=>{
      if(name == "title"){
        setValue("slug", slugTransform(value.title), {shouldValidate: true})
      }
    })
    return() => subscription.unsubscribe();
    // so it wont keep on going in a loop => optimise it
  },[watch, slugTransform, setValue])
  // we will pass this watch to the "title" input field in the form
  

  
// copy paste the return "form" so check it
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Inputs
                  label="Title :"
                  placeholder="Title"
                  className="mb-4"
                  {...register("title", { required: true })}
                />
                <Inputs
                  label="Slug :"
                  placeholder="Slug"
                  className="mb-4"
                  {...register("slug", { required: true })}
                  onInput={(e) => {
                      setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                  }} //if we wish to manually enter our slug
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Inputs
                  label="Featured Image :"
                  type="file"
                  className="mb-4"
                  accept="image/png, image/jpg, image/jpeg, image/gif"
                  {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                      <img
                          src={appwriteServices.getFilePreview(post.featuredImage)}
                          alt={post.title}
                          className="rounded-lg"
                      />
                    </div>
                )}
                <Selects
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Buttons type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Buttons>
            </div>
        </form>
  )
}
