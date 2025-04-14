import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk(
  "categorySlice/fetchCategory",
  async (category) => {
    const fetchLink = `https://fakestoreapi.in/api/products/category?type=${category}`;
    const products = await axios
      .get(fetchLink)
      .then((response) => response.data)
      .then((data) => data);
    return products;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    products: [],
    isLoading: true,
    isSuccess: true,
  },
  extraReducers: (builder) => {
    // all products
    builder.addCase(fetchCategory.pending, (state, actions) => {
      state.isLoading = true;
    });

    builder.addCase(fetchCategory.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.products = actions.payload;
    });

    builder.addCase(fetchCategory.rejected, (state, actions) => {
      state.isSuccess = false;
      state.isLoading = false;
    });
  },
});

export const {} = categorySlice.actions;
export default categorySlice.reducer;
