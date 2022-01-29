import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postAllOrders = createAsyncThunk(
  'allOrdersReducer/postAllOrders',
  async () => {
    const item = await axios.post('http://localhost:3001/RestDataFormats_Obj', {
      type: 'AllOrders',
    });
    return item.data.obj;
  }
);

export const allOrdersSlice = createSlice({
  name: 'onlineOrdersReducer',
  initialState: {
    obj: {},
    status: null,
  },
  reducers: {
    setObj: (state, action) => {
      state.obj = action.payload;
    },
    add: (state) => {
      console.log();
    },
  },
  extraReducers: {
    [postAllOrders.pending]: (state, action) => {
      state.status = 'loading';
    },
    [postAllOrders.fulfilled]: (state, action) => {
      state.obj = action.payload;
      state.status = 'success';
    },
    [postAllOrders.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { add, setObj } = allOrdersSlice.actions;
export default allOrdersSlice.reducer;
