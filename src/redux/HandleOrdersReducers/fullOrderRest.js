import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const postFullOrderRest = createAsyncThunk(
  'fullOrderRestReducer/postFullOrderRest',
  async () => {
    const result = await axios.post(
      'http://localhost:3001/RestDataFormats_Obj',
      {
        type: 'FullOrder',
      }
    );
    return result.data;
  }
);
export const fullOrderRestSlice = createSlice({
  name: 'fullOrderRestReducer',
  initialState: {
    obj: {},
    status: null,
  },
  reducers: {
    setObjRest: (state, action) => {
      state.obj = action.payload;
    },
    addDitailsUserRest: (state, action) => {
      state.obj[action.payload['key']] = action.payload['value'];
    },
    addProducts: (state, { payload }) => {
      let order = payload;
      let prices = {};
      let sum = 0;
      for (let i in order) {
        if (i === 'business') {
          if (order[i].length !== 0)
            for (let j in order[i]) {
              addOrderRest(order[i][j].obj);
            }
        } else {
          for (let j in order[i]) {
            sum += order[i][j].pos * order[i][j].prices[order[i][j].posSize];
            if (order[i][j].pos !== 0)
              prices[i] =
                order[i][j].pos * order[i][j].prices[order[i][j].posSize];
          }
        }
      }

      prices.sumPrice = sum;
      state.obj.price.push(prices);
      state.obj.orders.push(order);
    },
    removeProducts: (state, { payload }) => {
      state.obj.price = state.obj.price.filter((x, i) => i !== payload);
      state.obj.orders = state.obj.orders.filter((x, i) => i !== payload);
    },
    addOrderRest: (state, action) => {
      let order = action.payload;
      let prices = {};
      let sum = 0;
      let extraflag = true;
      for (let i in order) {
        if (i !== 'name' && i !== 'cash' && i !== 'remarks')
          for (let j in order[i]) {
            if (i !== 'salads') {
              sum += order[i][j].prices[order[i][j].pos];
            } else if (i === 'salads' && extraflag) {
              sum += order[i][j].prices[order[i][j].pos];
              extraflag = false;
            }
            if (i !== 'remarks' && i !== 'salads' && i !== 'sauces') {
              if (order[i][j].pos !== 0) prices[i] = j;
            } else if (i === 'salads') {
              if (order[i][j].pos === 3) prices[i] = 'extra';
            }
          }
      }
      state.obj.cash.push({
        name: order['name'],
        cash: order['cash'],
      });
      prices.remarks = order['remarks'];
      prices.cash = order['cash'];
      prices.sumPrice = sum;
      state.obj.price.push(prices);
      state.obj.orders.push(order);
    },
    removeOrderRest: (state, { payload }) => {
      state.obj.price.filter((x) => x === payload.id);
      state.obj.orders.filter((x) => x === payload.id);
    },
    addOrderInfoRest: (state, action) => {
      state.obj.cash = action.payload['cash'];
      state.obj.shipping = action.payload['shipping'];
    },
    editOrderRest: (state, action) => {
      for (let i in state.obj.orders) {
        if (state.obj.orders[i].name === action.payload['name']) {
          state.obj.orders[i] = action.payload;
        }
      }
    },
  },
  extraReducers: {
    [postFullOrderRest.pending]: (state, action) => {
      state.status = 'loading';
    },
    [postFullOrderRest.fulfilled]: (state, action) => {
      state.obj = action.payload.obj;
      state.status = 'success';
    },
    [postFullOrderRest.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const {
  setObjRest,
  addDitailsUserRest,
  addProducts,
  removeProducts,
  addOrderRest,
  removeOrderRest,
  addOrderInfoRest,
  editOrderRest,
} = fullOrderRestSlice.actions;
export default fullOrderRestSlice.reducer;
