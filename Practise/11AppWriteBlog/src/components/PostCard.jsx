// just to create a Postcard component which shows the featuredImage and a Title
import React from 'react'
import appwriteServices from "../appwrite/Config"
import {Link} from "react-router-dom"

// when we use appwriteServices we will get many things but we want id, title , featuredImage
// $id = is the post id in the database
// featuredImage = has the image id which is in database
function PostCard({$id, title , featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 p-4 rounded-lg'>
            <div className='mb-4 w-full justify-center'>
                <img src={appwriteServices.getFilePreview(featuredImage)} alt={title}  className='rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'>
                {title}
            </h2>
        </div>
    </Link>
  )
}

export default PostCard