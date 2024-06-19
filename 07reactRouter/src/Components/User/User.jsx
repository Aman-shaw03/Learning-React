import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userID} = useParams()
    return (
        <div className='text-white text-3xl bg-gray-600'>User : {userID}</div>
    )
}

export default User

// we took the access of "userID" through useparams hook
