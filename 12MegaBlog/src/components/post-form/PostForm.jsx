import React , {useCallback} from 'react'
import {RTE, Input, Button, Select} from '../index'
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import { useForm } from 'react-hook-form'
import appwriteService from "../../appwrite/config"

// i think since it is the form component which takes account of our RTE , input , button so error will be here
// either this or our pages
export default function PostForm({post}) {
  const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active",
    }
  })

  const navigate = useNavigate()
  const userData =  useSelector((state) => state.auth.userData)

  const submit = async (data) => {
    // data which we are sending. post = previous post data
    if (post) {
      const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

      if(file){
        appwriteService.deleteFile(post.featuredImage)
      }
      const dbpost = await appwriteService.updatePost(post.$id,{
        ...data,
        featuredImage: file ? file.$id :undefined
        // i think this undefined is causing the error
      });

      if (dbpost) {
        navigate(`/post/${dbpost.$id}`)
      }
      
    
    } else{
      const file = await appwriteService.uploadFile(data.image[0]);


      // some error on line 44 , which result in 400 
      if(file){
        const fileId = file.$id
        data.featuredImage = fileId
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id
        })
        if(dbPost){
          navigate(`/post/${dbPost.$id}`)
        }
      }
    }
  }

  const slugTransform = useCallback((value) =>{
    if(value && typeof value === "string")
      return value
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z\d\s]+/g, "-")
      .replace(/\s/g, "-");
      
    
    return "";
  },[])

    React.useEffect(() => {
      const subscription = watch( (value , {name}) => {
        if(name === "title"){
          setValue("slug", slugTransform(value.title), {shouldValidate: true});
        }
      });
      return () => subscription.unsubscribe();
    },[watch , slugTransform, setValue]);
      // interview Q :- in this useEffect we are calling a method ...how can we optimise it (so the method"watch") is not keeping on running?
      // we can hold the method in a variable and then at the end return the variable that hold the function and Unsubscribe 
      // so it wont keep it in a loop , that way we can optimise it

    return (
      <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
          <div className="w-2/3 px-2">
              <Input
                  label="Title :"
                  placeholder="Title"
                  className="mb-4"
                  {...register("title", { required: true })}
              />
              <Input
                  label="Slug :"
                  placeholder="Slug"
                  className="mb-4"
                  {...register("slug", { required: true })}
                  onInput={(e) => {
                      setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                  }}
              />
              <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
          </div>
          <div className="w-1/3 px-2">
              <Input
                  label="Featured Image :"
                  type="file"
                  className="mb-4"
                  accept="image/png, image/jpg, image/jpeg, image/gif"
                  {...register("image", { required: !post })}
              />
              {post && (
                  <div className="w-full mb-4">
                      <img
                          src={appwriteService.getFilePreview(post.featuredImage)}
                          alt={post.title}
                          className="rounded-lg"
                      />
                  </div>
              )}
              <Select
                  options={["active", "inactive"]}
                  label="Status"
                  className="mb-4"
                  {...register("status", { required: true })}
              />
              <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                  {post ? "Update" : "Submit"}
              </Button>
          </div>
      </form>
  );
}

