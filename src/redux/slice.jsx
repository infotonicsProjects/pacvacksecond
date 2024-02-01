import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  userEmail: {},
  cart: {},
  products: {}
};

export const counter = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      state.userData = action.payload;
    },
    addUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    addUser: (state, action) => {
      state.userData = action.payload;
    },
    addCart: (state, action) => {
      state.cart = action.payload;
    },
    addEditProducts: (state, action) => {
      state.products = action.payload
    }
  },
});

export const { addUserData, addUserEmail, addUser, addCart, addEditProducts } = counter.actions;
export default counter.reducer;
