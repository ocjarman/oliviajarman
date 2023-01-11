import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showForm: false,
  showAbout: false,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setShowForm: (state) => {
      if (state.showAbout === true) {
        state.showAbout = !state.showAbout;
        state.showForm = !state.showForm;
      } else {
        state.showForm = !state.showForm;
      }
    },
    setShowAbout: (state) => {
      if (state.showForm === true) {
        state.showForm = !state.showForm;
        state.showAbout = !state.showAbout;
      } else {
        state.showAbout = !state.showAbout;
      }
    },
  },
});

export const { setShowForm, setShowAbout } = contactSlice.actions;
export default contactSlice.reducer;
