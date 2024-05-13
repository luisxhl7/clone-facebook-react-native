import { createSlice } from "@reduxjs/toolkit";
import { usuariosFacebook } from "../../data/dataUsers";

const initialState = {
    isLoading: true, //true - false
    profileUsers: usuariosFacebook,
    userProfileById: null,
    userPosts: null,
    profileFriendsList: null
};

export const profileUsersSlice = createSlice({
    name: 'profileUsers',
    initialState,
    reducers: {
        isLoading: (state, action) => {
            state.isLoading = action.payload.state;
        },
        filterUserById: (state, action) => {
            state.userProfileById = action.payload.userProfileById;
        },
        filterUserPostById: (state, action) => {
            state.userPosts = action.payload.userPosts;
        },
        filterProfileFriendsList: (state, action) => {
            state.profileFriendsList = action.payload.profileFriendsList;
        },
        clearProfileUserData: (state) => {
            state.userProfileById = null;
            state.userPosts = null;
            state.profileFriendsList = null;
        },
    }
});
  
export const { 
    isLoading, 
    filterUserById, 
    filterUserPostById, 
    clearProfileUserData,
    filterProfileFriendsList 
} = profileUsersSlice.actions;

export default profileUsersSlice.reducer;
