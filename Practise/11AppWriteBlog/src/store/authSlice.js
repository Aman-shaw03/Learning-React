import { createSlice } from "@reduxjs/toolkit";

const intialstate = {
    status: false,
    userDate: null
}

const authSlice = createSlice({
    name: "auth",
    intialstate,

    reducers: {
        login: (state, action) => {
            state.status = true
            state.userDate = action.payload
        },
        logout: (state)=> {
            state.status = false
            state.userDate = null
        }
    }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer

// few suggestions//
/* here we are creating a reducer just to check if user is Login or logout ,
but we can create slicer for multiple things and set their reducers with this in a separate folder called "features"
like for post and all */