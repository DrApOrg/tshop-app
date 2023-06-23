import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { EmptyUser, User } from "../types/User";

export interface AuthProvider {
  user: User;
  token: string;
}

const initialState: AuthProvider = {
  user: EmptyUser,
  token: "",
}
export const resetState = createAction<AuthProvider>('resetState')

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUserState: (state, action: PayloadAction<Partial<User>>) => {
      state.user = {
        ...state.user,
        ...action.payload,
      }
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    resetState: (state) => {
      state.user = initialState.user
    }
  }
})
