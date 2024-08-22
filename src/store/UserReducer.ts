import { createSlice } from "@reduxjs/toolkit";
import UserInterface from '@appInterfaces/UserInterface';

const emptyUserData = {
  token: null,
  firstName: null,
  lastName: null
};

const UserState: UserInterface = {
  user: emptyUserData,
  status: 'idle',
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState: UserState,
  reducers: {
    loginStart: (state) => {
      state.status = 'loading';
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
      state.user = emptyUserData;
      state.status = 'idle';
      state.error = null;
    }
  }
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;