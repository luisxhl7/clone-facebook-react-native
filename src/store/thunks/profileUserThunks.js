import { clearProfileUserData, filterProfileFriendsList, filterUserById, filterUserPostById, isLoading } from "../slices/profileUsersSlice";

export const getProfileUser_thunks = (idUser) => {
    return async(dispatch, getState) => {
        try {
            
            await dispatch(clearProfileUserData());

            const {profileUsers} = await getState().profileUsers;
            const {user} = await getState().auth;
            
            const isFriend = await user.friendsList.some( item => item.id === idUser)

            const resp = await profileUsers.filter((user) => user.id === idUser)[0];
            
            await dispatch( filterUserById({
                userProfileById: {
                    ...resp,
                    isFriend: isFriend
                }
            }));

            dispatch(isLoading({state: false}))

        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    }
}

export const getPostUser_thunks = (idUser) => {
    return async(dispatch, getState) => {
        try {
            await dispatch(clearProfileUserData());

            const {publications} = getState().publications;
            
            const resp = await publications.filter((publication) => publication.idUser === idUser);

            await dispatch( filterUserPostById({userPosts: resp}) );

        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    }
}

export const getFriendsUser_thunks = () => {
    return async(dispatch, getState) => {
        try {
            const { userProfileById, profileUsers } = await getState().profileUsers;
            const {user} = await getState().auth;

            const userFriendsList = user.friendsList?.map(friend => friend.id);
            const friendsListOtherUser = userProfileById?.friendsList?.map(friend => friend.id);

            const listFriends = friendsListOtherUser?.map(friendId => {
                const profile = profileUsers?.find(item => item.id === friendId);
                const isFriend = userFriendsList?.includes(friendId);
            
                if (!profile) return null;
            
                const updatedProfile = { ...profile };

                updatedProfile.isFriend = isFriend || false;
            
                return updatedProfile;
            });
            
            dispatch(filterProfileFriendsList({profileFriendsList: listFriends}))

        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    }
}