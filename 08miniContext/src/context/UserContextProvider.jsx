import React from "react";
import UserContext from "./UserContext"

const UserContextProvider = ({children}) => {
    const [User , setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{User, setUser}}>
        {children}
        </UserContext.Provider>
    )
}
// children data is getting through User and if some data need to add , so we use setUser 
// 
export default UserContextProvider