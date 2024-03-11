import { configureStore } from "@reduxjs/toolkit";
import appDrawerSlice from "./appDrawerSlice";
import themeProviderSlice from "./themeProviderSlice";
import messageSlice from "./messageSlice";

export const store = configureStore({
    reducer: {
        appDrawer: appDrawerSlice,
        themeProvider: themeProviderSlice,
        message: messageSlice,
    }
});