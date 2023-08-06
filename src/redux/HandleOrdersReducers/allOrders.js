import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postAllOrders = createAsyncThunk(
  'allOrdersReducer/postAllOrders',
  async (res, { dispatch, getState }) => {
    const { staffList } = getState();
    const item = await axios.post('http://localhost:3001/RestDataFormats_Obj', {
      type: 'AllOrders',
    });
    try {
      console.log(item.data.obj);
      let oneLeader = true;
      for (let i in staffList.obj) {
        item.data.obj.details.employees.employeesID.push(staffList.obj[i].id);
        if (
          oneLeader &&
          (staffList.obj[i].rol === 'menager' /*להחליף לmanager */ ||
            staffList.obj[i].rol === 'leader')
        ) {
          item.data.obj.details.employees.leader.name = staffList.obj[i].name;
          item.data.obj.details.employees.leader.id = staffList.obj[i].id;
          oneLeader = false;
        }
      }
      console.log(item.data.obj);

      return item.data.obj;
    } catch (err) {
      console.log(err);
    }
  }
);
export const postDataToArduino = createAsyncThunk(
  'allOrdersReducer/postDataToArduino',
  async (res, { dispatch, getState }) => {
    const { allOrders } = getState();
    console.log(allOrders);
    //const item = await axios.post('http://localhost:3002/InsertOrder', {});
  }
);

export const allOrdersSlice = createSlice({
  name: 'allOrdersReducer',
  initialState: {
    newOBJ: {},
    newOBJRest: {},
    compeleteOBJ: {},
    queArrObjOnline: [],
    servingsInOrder: [],
    status: null,
  },
  reducers: {
    setDetailsByType: (state, { payload }) => {
      state.newOBJRest.details[payload.type] = payload.value;
    },
    setDetailsDateStart: (state, { payload }) => {
      state.newOBJRest.details.date.cash = payload.cash;
      state.newOBJRest.details.date.shipping = payload.shipping;
      state.newOBJRest.details.date.orderTime = payload.orderTime;
    },
    addOrderToArray: (state, { payload }) => {
      state.queArrObjOnline.push({
        id: state.queArrObjOnline.length,
        obj: state.newOBJRest,
      });
      state.servingsInOrder.push({
        id: state.queArrObjOnline.length - 1,
        obj: payload,
      });
      postAllOrders();
    },
    removeOrderFromArray: (state, { payload }) => {
      state.compeleteOBJ = state.queArrObjOnline[payload.id];
      state.queArrObjOnline = state.queArrObjOnline.filter(
        (x, i) => i != 0 //payload.id --Options to remove by id/index
      );
      state.servingsInOrder = state.servingsInOrder.filter(
        (x, i) => i != 0 //payload.id --Options to remove by id/index
      );
      let newPos = 0;
      for (let i in state.queArrObjOnline) {
        state.queArrObjOnline[i].id = newPos;
        state.servingsInOrder[i].id = newPos++;
      }
    },
  },
  extraReducers: {
    [postAllOrders.pending]: (state, action) => {
      state.status = 'loading';
    },
    [postAllOrders.fulfilled]: (state, action) => {
      state.newOBJ = action.payload;
      state.newOBJRest = action.payload;
      /*const date = new Date();
      state.newOBJRest.details.date.orderTime = {
        date: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        time: date.getHours() + ':' + date.getMinutes(),
      };*/
      state.status = 'success';
    },
    [postAllOrders.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const {
  setDetailsByType,
  setDetailsDateStart,
  addOrderToArray,
  removeOrderFromArray,
} = allOrdersSlice.actions;
export default allOrdersSlice.reducer;
