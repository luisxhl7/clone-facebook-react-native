import { createSlice } from "@reduxjs/toolkit";
import { usuariosFacebook } from "../../data/dataUsers";

const initialState = {
    isLoading: true, //true - false
    profileUsers: usuariosFacebook,
    userProfileById: null,
    userPosts: null
};

export const profileUsersSlice = createSlice({
    name: 'profileUsers',
    initialState,
    reducers: {
        isLoading: (state, action) => {
            console.log(action.payload.state);
            state.isLoading = action.payload.state;
        },
        filterUserById: (state, action) => {
            state.userProfileById = action.payload.userProfileById;
        },
        filterUserPostById: (state, action) => {
            state.userPosts = action.payload.userPosts;
        },
        clearProfileUserData: (state) => {
            state.userProfileById = null;
            state.userPosts = null;
        },
    }
});
  
export const { isLoading, filterUserById, filterUserPostById, clearProfileUserData } = profileUsersSlice.actions;

export default profileUsersSlice.reducer;
