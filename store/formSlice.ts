import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface fetchedInformation {
  fieldName: string
  type: string
  value: string
  options?: string[]
}

export interface AuthState {
  formData: fetchedInformation[];
}

// Initial state
const initialState: AuthState = {
  formData: []
};

// Actual Slice
export const formSlice = createSlice({
  name: "data",
  initialState,
  reducers: {

    // Action to set the authentication status
    setFormData(state, action) {
      state.formData = action.payload.data
    },
  },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.data
        };
      },
    },
});

export const { setFormData } = formSlice.actions;

export const selectFormState = (state: AppState) => state.data.formData;

export default formSlice.reducer;