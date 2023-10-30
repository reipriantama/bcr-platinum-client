import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedBank: true,
    chosenBankName: null,
    // dateRent: [],
    totalPrice: null,
    konfirmasi: JSON.parse(sessionStorage.getItem("confirm")),
    timerNow: new Date(sessionStorage.getItem("timerNow")),
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
        updateTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        updateKonfirmasi: (state, action) => {
            state.konfirmasi = action.payload;
        },
        updateTimerNow: (state, action) => {
            state.timerNow = action.payload;
        }
        
    },
});

export const { updateSelectedBank, updateChosenBankName, updateTotalPrice, updateKonfirmasi, updateTimerNow } = SlicePembayaran.actions;

export default SlicePembayaran.reducer;