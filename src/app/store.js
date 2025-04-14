import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import singleProductSlice from "./singleProductSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    cart: cartSlice,
    product: singleProductSlice,
    category: categorySlice,
  },
});

export default store;
