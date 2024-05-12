import { createSlice } from "@reduxjs/toolkit";
import { usuariosFacebook } from "../../data/dataUsers";

const initialState = {
    isLoading: false, //true - false
    profileUsers: usuariosFacebook,
    usersFriendsList: null,
    userPosts: null
};

export const profileUsersSlice = createSlice({
    name: 'profileUsers',
    initialState,
    reducers: {
        isLoading: (state) => {
            state.profileUsers = true;
        },
        filterUserById: (state, action) => {
            state.usersFriendsList = action.payload.profileUserById;
        },
        filterUserPostById: (state, action) => {
            state.userPosts = action.payload.userPosts;
        },
    }
});
  
export const { isLoading, filterUserById, filterUserPostById } = profileUsersSlice.actions;

export default profileUsersSlice.reducer;
