import { dataPublications } from "../../data/dataPublications";
import { filterPublicationsById } from "../slices/publicationsSlice";

export const getPublicationById_thunks = (idPublication) => {
    return async(dispatch, getState) => {
        try {
            const resp = await dataPublications.filter(item => item.idPublication === idPublication)[0]
            dispatch(filterPublicationsById({publicationById: resp}))

        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    }
}