import { filterUserById, filterUserPostById } from "../slices/profileUsersSlice";

export const getProfileUser_thunks = (idUser) => {
    return async(dispatch, getState) => {
        try {
            const {profileUsers} = getState().profileUsers;
            
            const resp = await profileUsers.filter((user) => user.id === idUser)[0];
            
            dispatch( filterUserById({profileUserById: resp}) );

        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    }
}

export const getPostUser_thunks = (idUser) => {
    return async(dispatch, getState) => {
        try {
            const {publications} = getState().publications;
            
            const resp = await publications.filter((publication) => publication.idUser === idUser);

            dispatch( filterUserPostById({userPosts: resp}) );

        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    }
}