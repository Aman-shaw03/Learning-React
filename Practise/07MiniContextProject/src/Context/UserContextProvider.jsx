import React, {useState} from 'react'
import UserContext from  "./UserContext"



const UserContextProvider = ({children}) => {
    const [User, setUser] = useState(null)

    return (
        <UserContext.Provider value={{User, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
// used the context created to provide the context => to the state
// => use that state to access the context by children components