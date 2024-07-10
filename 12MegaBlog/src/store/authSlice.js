import {createSlice} from '@reduxjs/toolkit'

const intialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    intialState,
    reducers: {
        logIn : (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logOut: (state) => {
            state.status = false;
            state.userData = null
        }}
    }

)

export const {logIn, logOut} = authSlice.actions;

export default authSlice.reducer;