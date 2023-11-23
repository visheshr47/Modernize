import { createSlice } from "@reduxjs/toolkit";
const userInfoSlice = createSlice({
    name: "UserAccount",
    initialState: {
        accounts: []
    },
    reducers: {
        addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        removeAccount: (state) => {
            state.accounts.pop(action)
        },
        clearBasket: (state) => {
            state.accounts.length = (0);
        }
    }
})
export const { addAccount, removeAccount, clearBasket } = userInfoSlice.actions;
export default userInfoSlice.reducer;