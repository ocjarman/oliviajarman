import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showForm: false,
  showAbout: false,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setShowForm: (state, action) => {
      state.showForm = action.payload;
    },
    setShowAbout: (state, action) => {
      console.log(action.payload);
      state.showAbout = action.payload;
    },
  },
});

export const { setShowForm, setShowAbout } = contactSlice.actions;
export default contactSlice.reducer;
