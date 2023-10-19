import { configureStore } from "@reduxjs/toolkit";
import SlicePembayaran from "./SlicePembayaran";


export const store = configureStore({
    reducer: {
        storePembayaran: SlicePembayaran,
    },
});