import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

let type;
let name;
let anount;

export const fetchItemsInOrders = createAsyncThunk(
  'itemsInOrder/fetchItemsInOrders',
  async () => {
    const item = await axios.post('http://localhost:3001/RestDataFormats_Obj', {
      type: 'OrdersOBJ',
    });
    return item.data.obj;
  }
);
export const itemsInOrderSlice = createSlice({
  name: 'itemsInOrder',
  initialState: {
    obj: {},
    status: null,
  },
  reducers: {
    setObj: (state, action) => {
      state.obj = action.payload;
    },
    setValues: (state, action) => {
      state.obj[action.payload['key']] = action.payload['value'];
    },
    decrement: (state, action) => {
      type = action.payload['type'];
      name = action.payload['name'];
      anount = state.obj[type][name].pos;
      //Reduction of quantities
      //If the product is in (out) condition. The situation resets and becomes a state (without)
      if (anount === 4) state.obj[type][name].pos = 0;
      else if (anount > 0) {
        state.obj[type][name].pos--;
      }
    },
    //Raising quantities
    increment: (state, Action) => {
      type = Action.payload['type'];
      name = Action.payload['name'];
      //for salads & sauces & extras
      if (type === 'salads' || type === 'sauces') {
        if (state.obj[type][name].pos < 3 && state.obj[type][name].pos > 0)
          state.obj[type][name].pos++;
        else if (state.obj[type][name].pos === 0) state.obj[type][name].pos = 2;
      }
      //for breads
      else if (type === 'breads') {
        if (state.obj[type][name].pos < 1) state.obj[type][name].pos++;
      }
      //Reduction of quantities
      else if (type === 'meat' || type === 'extras' || type === 'drink') {
        if (state.obj[type][name].pos < 2) state.obj[type][name].pos++;
      }
    },
    //Adding a product, default to an added product will get the value 2 (classic)
    addItem: (state, Action) => {
      type = Action.payload['type'];
      name = Action.payload['name'];
      if (state.obj[type][name].pos === 0) state.salads[name].pos = 2;
    },
    //Method (aside) initializes the product value to be 4 (side)
    aside: (state, Action) => {
      type = Action.payload['type'];
      name = Action.payload['name'];
      if (type !== 'extras') state.obj[type][name].pos = 4;
    },
    measure: (state, action) => {
      name = action.payload['name'];
      type = action.payload['pos'];
      switch (type) {
        case 0:
          state.obj.meat.measure = 'ללא';
          break;
        case 1:
          state.obj.meat.measure = 'R';
          break;
        case 2:
          state.obj.meat.measure = 'MR';
          break;
        case 3:
          state.obj.meat.measure = 'M';
          break;
        case 4:
          state.obj.meat.measure = 'MW';
          break;
        case 5:
          state.obj.meat.measure = 'WD';
          break;
        default:
          state.obj.meat.measure = 'ללא';
          break;
      }
    },
  },
  extraReducers: {
    [fetchItemsInOrders.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchItemsInOrders.fulfilled]: (state, action) => {
      state.obj = action.payload;
      state.status = 'success';
    },
    [fetchItemsInOrders.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  clear,
  createArrayPrices,
  setValues,
  aside,
  measure,
  setObj,
} = itemsInOrderSlice.actions;
export default itemsInOrderSlice.reducer;
