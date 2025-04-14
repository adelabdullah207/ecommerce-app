import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleProduct = createAsyncThunk(
  "singleProductSlice/fetchSingleProduct",
  async (id) => {
    const product = await axios
      .get(`https://fakestoreapi.in/api/products/${id}`)
      .then((response) => response.data)
      .then((data) => data);
    return product;
  }
);

const singleProductSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
    isLoading: true,
    isSuccess: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.pending, (state, actions) => {
      state.isLoading = true;
    });

    builder.addCase(fetchSingleProduct.fulfilled, (state, actions) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.product = actions.payload;
    });

    builder.addCase(fetchSingleProduct.rejected, (state, actions) => {
      state.isSuccess = false;
      state.isLoading = false;
    });
  },
});

export default singleProductSlice.reducer;
export const {} = singleProductSlice.actions;
