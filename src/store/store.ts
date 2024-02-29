import {configureStore} from "@reduxjs/toolkit";
import AccountSlice from "./AccountSlice.ts";

export const store = configureStore({
    reducer: {
        account: AccountSlice
    }
})