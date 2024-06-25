import React from "react";
import UserContext from "./Usercontext";

const UserContextProvider =({children}) => {
    const [User, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{User, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider