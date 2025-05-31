import { createSlice } from "@reduxjs/toolkit";
// create slice for authentication ko track krne ke liye 
// for tracking the authenticn of user , is user is authenticate or not

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions;
// login , logout is actions
export default authSlice.reducer;


// existing values ko spread krne ki koi jarurat nhi hai...
