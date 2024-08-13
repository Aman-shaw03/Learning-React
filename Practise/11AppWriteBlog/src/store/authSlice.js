import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userDate: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    // spelling mistake initialstate => initialState

    reducers: {
        login: (state, action) => {
            state.status = true
            state.userData = action.payload
            //spelling mistake userDate => userData
        },
        logout: (state)=> {
            state.status = false
            state.userData = null
            //spelling mistake userDate => userData
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;

// few suggestions//
/* here we are creating a reducer just to check if user is Login or logout ,
but we can create slicer for multiple things and set their reducers with this in a separate folder called "features"
like for post and all */