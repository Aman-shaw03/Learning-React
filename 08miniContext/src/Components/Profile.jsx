import React, {useContext} from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const {User} = useContext(UserContext)
    if (!User) return <div>Please Log In</div>
    return <div>Welcome {User.UserName}</div>
}

export default Profile
