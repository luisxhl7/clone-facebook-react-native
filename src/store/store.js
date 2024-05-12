import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./slices/authSlice";
import profileUsersReducer from "./slices/profileUsersSlice";
import publicationsReducer from "./slices/publicationsSlice";
import marketsReducer from "./slices/marketSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        profileUsers: profileUsersReducer,
        publications: publicationsReducer,
        markets: marketsReducer,
    },
});

export default store;
