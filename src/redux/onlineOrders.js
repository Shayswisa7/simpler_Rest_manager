import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postOnlineOrders = createAsyncThunk(
  'onlineOrdersReducer/postAllOrders',
  async () => {
    /*  const item = await axios.post('http://localhost:3001/RestDataFormats_Obj', {
      type: 'AllOrders',
    });
    return item.data.obj;*/
  }
);

export const onlineOrdersSlice = createSlice({
  name: 'onlineOrdersReducer',
  initialState: {
    obj: [],
    status: null,
  },
  reducers: {
    setObj: (state, action) => {
      state.obj = action.payload;
    },
    add: (state, action) => {
      state.obj.push(action.payload);
    },
    remove: (state) => {
      let i = 0;
      let obj = [];
      state.obj.reverse();
      while (i++ < 10) obj.push(state.obj.pop());
      state.obj.reverse();
      state.status = 'success';
      return obj;
    },
  },
  extraReducers: {
    [postAllOrders.pending]: (state, action) => {
      state.status = 'loading';
    },
    [postAllOrders.fulfilled]: (state, action) => {
      state.obj = action.payload;
    },
    [postAllOrders.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { add, setObj } = onlineOrdersSlice.actions;
export default onlineOrdersSlice.reducer;
