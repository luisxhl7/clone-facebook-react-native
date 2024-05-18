import { createSlice } from "@reduxjs/toolkit";
import { dataPublications } from "../../data/dataPublications";

const initialState = {
    isLoading: false, //true - false
    publications: dataPublications,
    publicationByUser: null,
    publicationById: null
};

export const publicationsSlice = createSlice({
    name: 'publications',
    initialState,
    reducers: {
        isLoading: (state) => {
            state.profileUsers = true;
        },
        filterPublicationsByUser: (state, action) => {
            state.publicationByUser = action.payload.publicationByUser;
        },
        filterPublicationsById: (state, action) => {
            state.publicationById = action.payload.publicationById;
        },
    }
});
  
export const { isLoading, filterPublicationsByUser, filterPublicationsById } = publicationsSlice.actions;

export default publicationsSlice.reducer;
