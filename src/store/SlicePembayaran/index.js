import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedBank: true,
    chosenBankName: null,
    // dateRent: [],
    totalPrice: null,
};

export const SlicePembayaran = createSlice({
    name: "pembayaran",
    initialState,
    reducers: {
        updateSelectedBank: (state, action) => {
            state.selectedBank = action.payload;
        },
        updateChosenBankName: (state, action) => {
            state.chosenBankName = action.payload;
        },
        // updateDateRent: (state, action) => {
        //     state.dateRent = action.payload;
        // },
        updateTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        
    },
});

export const { updateSelectedBank, updateChosenBankName, /*updateDateRent,*/ updateTotalPrice } = SlicePembayaran.actions;

export default SlicePembayaran.reducer;