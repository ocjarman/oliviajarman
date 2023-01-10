import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showForm: false,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setShowForm: (state) => {
      state.showForm = !state.showForm;
    },
  },
});

export const { setShowForm } = contactSlice.actions;
export default contactSlice.reducer;
