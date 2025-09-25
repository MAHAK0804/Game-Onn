import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IAuthState {
  authState: boolean;
}

const initialState: IAuthState = {
  authState: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.authState = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("authState", JSON.stringify(action.payload));
      }
    },
    logout: (state) => {
      state.authState = false;
      if (typeof window !== "undefined") {
        localStorage.removeItem("authState");
      }
    },
  },
});

export const { setAuthState, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
