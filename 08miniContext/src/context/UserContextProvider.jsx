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
// data is provided here by wraping our component in context.provider and passing Children as a prop
//SomeContext.Provider lets you provide the context value to components.
//call useContext(SomeContext) in components below to read it.  

export default UserContextProvider