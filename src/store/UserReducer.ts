import { createSlice } from "@reduxjs/toolkit";

const UserState = {
    user: null,
    status: 'idle',
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState: UserState,
    reducers: {
        loginStart: (state) => {
            state.status = 'loading'
        },
        loginSuccess: (state, action) => {
            state.status = 'idle';
            state.user = action.payload;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.status = 'idle';
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.status = 'idle';
            state.error = null;
        }
    }
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;