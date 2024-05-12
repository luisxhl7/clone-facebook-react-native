import { createSlice } from "@reduxjs/toolkit";
import { dataMarket } from "../../data/dataMarkets";

const initialState = {
    isLoading: false, //true - false
    markets: dataMarket,
};

export const marketsSlice = createSlice({
    name: 'markets',
    initialState,
    reducers: {
        isLoading: (state) => {
            state.profileUsers = true;
        },
    }
});
  
export const { isLoading } = marketsSlice.actions;

export default marketsSlice.reducer;
