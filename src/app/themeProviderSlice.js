import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
};

export const themeProviderSlice = createSlice({
    name: "themeProvider",
    initialState: initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        }
    }
});

export const { setMode } = themeProviderSlice.actions;
export const getMode = state => state.themeProvider.mode;
export default themeProviderSlice.reducer;