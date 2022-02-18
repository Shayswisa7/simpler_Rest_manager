import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

let type;
let name;
let anount;

export const postItemsInOrders = createAsyncThunk(
  'itemsInOrder/postItemsInOrders',
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
        if (state.obj[type][name].pos < 1) {
          state.obj[type][name].pos++;
          Object.keys(state.obj[type]).map((item) => {
            if (name !== item) state.obj[type][item].pos = 0;
          });
        }
      }
      //Reduction of quantities
      else if (type === 'meat' || type === 'extras' || type === 'drink') {
        if (state.obj[type][name].pos < 2) {
          state.obj[type][name].pos++;
          Object.keys(state.obj[type]).map((item) => {
            if (name !== item) state.obj[type][item].pos = 0;
          });
        }
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
    incrementMeasure: (state, { payload }) => {
      const posM = state.obj[payload.type][payload.name].posM;
      if (posM < 4) {
        state.obj[payload.type][payload.name].posM++;
        switch (state.obj[payload.type][payload.name].posM) {
          case 0:
            state.obj[payload.type][payload.name].measure = 'R';
            break;
          case 1:
            state.obj[payload.type][payload.name].measure = 'MR';
            break;
          case 2:
            state.obj[payload.type][payload.name].measure = 'M';
            break;
          case 3:
            state.obj[payload.type][payload.name].measure = 'MW';
            break;
          case 4:
            state.obj[payload.type][payload.name].measure = 'WD';
            break;
          default:
            state.obj[payload.type][payload.name].measure = 'ללא';
            break;
        }
      }
    },
    decrementMeasure: (state, { payload }) => {
      const posM = state.obj[payload.type][payload.name].posM;
      if (posM > 0) {
        state.obj[payload.type][payload.name].posM--;
        switch (state.obj[payload.type][payload.name].posM) {
          case 0:
            state.obj[payload.type][name].measure = 'R';
            break;
          case 1:
            state.obj[payload.type][name].measure = 'MR';
            break;
          case 2:
            state.obj[payload.type][name].measure = 'M';
            break;
          case 3:
            state.obj[payload.type][name].measure = 'MW';
            break;
          case 4:
            state.obj[payload.type][name].measure = 'WD';
            break;
          default:
            state.obj[payload.type][name].measure = 'ללא';
            break;
        }
      }
    },
  },
  extraReducers: {
    [postItemsInOrders.pending]: (state, action) => {
      state.status = 'loading';
    },
    [postItemsInOrders.fulfilled]: (state, action) => {
      state.obj = action.payload;
      state.status = 'success';
    },
    [postItemsInOrders.rejected]: (state, action) => {
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
  setObj,
  incrementMeasure,
  decrementMeasure,
} = itemsInOrderSlice.actions;
export default itemsInOrderSlice.reducer;
