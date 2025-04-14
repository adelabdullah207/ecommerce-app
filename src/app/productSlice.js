import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async () => {
    const products = await axios
      .get("https://fakestoreapi.in/api/products")
      .then((response) => response.data)
      .then((data) => data);
    return products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: true,
    isSuccess: true,
  },

  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchProducts.pending, (state, actions) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.products = actions.payload;
    });

    builder.addCase(fetchProducts.rejected, (state, actions) => {
      state.isSuccess = false;
      state.isLoading = false;
    });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
