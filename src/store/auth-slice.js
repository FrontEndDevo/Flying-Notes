import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: "", isAuthenticated: false };

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload;
    },

    logout(state) {
      state.isAuthenticated = false;
      state.token = "";
    },
  },
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice;
