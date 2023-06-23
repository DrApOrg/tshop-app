import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Payload } from "../types/Payoad";

export interface RegisterProvider {
  step: number;
  phoneNumber: string;
  pinCode: string;
  password: string;
}

const initialState: RegisterProvider = {
  step: 0,
  phoneNumber: '',
  pinCode: '',
  password: '',
}

export const registerSlice = createSlice({
  name: 'code',
  initialState: initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setPinCode: (state, action: PayloadAction<string>) => {
      state.pinCode = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    setPasswordMain: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    reset: () => initialState
  },
})
