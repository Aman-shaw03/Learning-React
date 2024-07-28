import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {User} = useContext(UserContext)
  if(!User) return <div>Please Log In</div>
  return <div>Welcome to the party Mr. {User.Username} , hope you know your password is {User.password}</div>
}

export default Profile