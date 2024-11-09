import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axiosClient";

const initialState = {
  products: [],
};
export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response: any = await axiosClient.get("/foods");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "productSlice",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      console.log(action);
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      console.log(action.error);
    });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
