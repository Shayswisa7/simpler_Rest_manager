import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postBusiness = createAsyncThunk(
  'businessReducer/postBusiness',
  async () => {
    const item = await axios.get('http://localhost:3001/GetBusinessList', {});
    return item.data;
  }
);
export const businessSlice = createSlice({
  name: 'businessReducer',
  initialState: {
    obj: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [postBusiness.pending]: (state, action) => {
      state.status = 'loading';
    },
    [postBusiness.fulfilled]: (state, action) => {
      state.obj = action.payload;
      state.status = 'success';
    },
    [postBusiness.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { setObj, increment, decrement } = businessSlice.actions;
export default businessSlice.reducer;
