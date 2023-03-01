import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const formationSlice = createSlice({
  name: "formation",
  initialState,
  reducers: {
    loadFormation: (state, action) => {
      console.log("payload", action.payload);
      state.value = action.payload;
    },
    addFormation: (state, action) => {
      state.value.unshift(action.payload);
    },
    deleteFormation: (state, action) => {
      state.value = state.value.filter(
        (formation) => formation._id !== action.payload
      );
    },

    //updateFormation?
  },
});

export const { loadFormation, addFormation, deleteFormation } =
  formationSlice.actions;
export default formationSlice.reducer;
