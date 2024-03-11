import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: "message",
    initialState: {
        openMessage: false,
        feedBack: "",
    },
    reducers: {
        setOpenMessage: (state) => {
            state.openMessage = !state.openMessage;
        },
        setFeedBack: (state, action) => {
            return {
                ...state,
                feedBack: action.payload,
            };
        },
    }
});

export const { setFeedBack, setOpenMessage } = messageSlice.actions;
export default messageSlice.reducer;