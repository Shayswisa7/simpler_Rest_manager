import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getOnlineOrdersFromClientWab = createAsyncThunk(
  'onlineOrdersFromClientWabReducer/getOnlineOrdersFromClientWab',
  async () => {
    /*  const item = await axios.post('http://localhost:3001/RestDataFormats_Obj', {
      type: 'AllOrders',
    });
    return item.data.obj;*/
  }
);

export const onlineOrdersFromClientWabSlice = createSlice({
  name: 'onlineOrdersFromClientWabReducer',
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
    [getOnlineOrdersFromClientWab.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getOnlineOrdersFromClientWab.fulfilled]: (state, action) => {
      state.obj = action.payload;
    },
    [getOnlineOrdersFromClientWab.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { add, setObj } = onlineOrdersFromClientWabSlice.actions;
export default onlineOrdersFromClientWabSlice.reducer;
