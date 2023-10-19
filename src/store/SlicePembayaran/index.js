import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedBank: true,
    chosenBankName: null,
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
        
    },
});

export const { updateSelectedBank, updateChosenBankName } = SlicePembayaran.actions;

export default SlicePembayaran.reducer;