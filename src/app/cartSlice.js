import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  amount: [],
  totalAmount: 0,
  finalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isAlreadyExist = state.product.find(
        (item) => item.id === action.payload.id
      );
      if (isAlreadyExist) {
        state.amount[state.product.id];
      } else {
        state.product.push(action.payload);
        state.amount += 1;
      }
      state.totalAmount = state.product.length;
      state.finalPrice += action.payload.price;
    },
    delFromCart: (state, action) => {
      state.product = state.product.filter(
        (item) => item.id != action.payload.id
      );
      state.finalPrice -= action.payload.price;
      state.totalAmount -= 1;
    },
  },
});

export const { addToCart, delFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
