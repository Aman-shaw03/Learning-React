import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from "react-router-dom"

function PostCard({$id, title, featuredImage}) {
    // appwrite provide $id instead of i , just syntax changes
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 p-4 rounded-lg'>
            <div className='mb-4 w-full justify-center'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'>
                {title}
            </h2>
        </div>
    </Link>
  )
}

export default PostCard