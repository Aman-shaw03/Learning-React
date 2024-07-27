import React from 'react'
import {useParams} from "react-router-dom"

function User() {
  const {UserID} = useParams()
  return (
    <div className='text-white text-3xl bg-gray-600'>User :{UserID}</div>
  )
}

export default User