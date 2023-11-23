import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./userInfoSlice";
const appStore = configureStore({
    reducer: {
        user: userInfoSlice,
    }
});
export default appStore;