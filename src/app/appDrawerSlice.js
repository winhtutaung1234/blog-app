import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
}

export const appDrawerSlice = createSlice({
    name: 'appDrawer',
    initialState: initialState,
    reducers: {
        setOpenDrawer: (state) => {
            state.open = !state.open
        },
    }
});

export const { setOpenDrawer } = appDrawerSlice.actions;
export const getOpenDrawer = state => state.appDrawer.open;
export default appDrawerSlice.reducer;