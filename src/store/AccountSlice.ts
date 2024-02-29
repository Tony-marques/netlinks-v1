import {createSlice} from "@reduxjs/toolkit";
import {IAccount} from "../interfaces/Account.ts";

interface IState {
    account: string | undefined | IAccount;
}

const initialState: IState = {
    account: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || 'null') : undefined
};

export const AccountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        updateAccount: (state, action) => {
            state.account = action.payload;
        }
    }
});

export const {updateAccount} = AccountSlice.actions;

export default AccountSlice.reducer;