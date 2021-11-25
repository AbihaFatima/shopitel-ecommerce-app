import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
      currentUser : null,
      isFetching : false,
      error : false
    },
    reducers: {
        loginStart: (state) => {
          state.isFetching = true;
        },
        loginSuccess: (state, action) => {
          state.isFetching = false;
          state.currentUser = action.payload;
        },
        loginFailure: (state) => {
          state.isFetching = false;
          state.error = true;
        },
        registerStart: (state) => {
          state.isFetching = true;
        },
        registerSuccess: (state, action) => {
          state.isFetching = false;
          state.currentUser = action.payload;
        },
        registerFailure: (state) => {
          state.isFetching = false;
          state.error = true;
        },
        
      },
      logout: (state) => {
        state.currentUser = null;
      },
    });
    
    export const { loginStart, loginSuccess, loginFailure, registerStart, registerSuccess, registerFailure,logout } = userSlice.actions;
    export default userSlice.reducer;