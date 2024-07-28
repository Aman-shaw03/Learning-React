import React, {useContext} from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const {User} = useContext(UserContext)
    if (!User){ 
        return <div>Please Log In</div>
    }else{
        return <div>Welcome {User.UserName + User.password} </div>
    }
    
}

export default Profile
// accessing the data here to display the user data like username and password
