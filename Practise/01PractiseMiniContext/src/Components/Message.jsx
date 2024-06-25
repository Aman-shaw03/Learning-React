import React, {useContext} from "react";
import UserContext from "../Context/Usercontext";

function Message(){
    const {User} = useContext(UserContext)
    if (!User) return <div>Please Provide Log In Details</div>
    return <div> Welcome {User.UserName} + {User.Password} is your password</div>
}

export default Message