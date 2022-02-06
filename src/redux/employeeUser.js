import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const postEmployeeUserOBJ = createAsyncThunk(
  'employeeUserReducer/postEmployeeUser',
  async () => {
    const user = await axios.post('http://localhost:3001/RestDataFormats_Obj', {
      type: 'RestEmployees',
    });
    return user.data;
  }
);
export const postEmployeeUserCreateUser = createAsyncThunk(
  'employeeUserReducer/postEmployeeUserCreateUser',
  async (req, { dispatch }) => {
    console.log('_________', req);
    try {
      const user = await axios.post('http://localhost:3001/CreateUser', {
        type: 'Employee',
        user: req,
      });
      const data = await user.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const employeeUserSlice = createSlice({
  name: 'employeeUserReducer',
  initialState: {
    obj: {},
    status: null,
    error: null,
  },
  reducers: {
    setObj: (state, action) => {
      state.obj = action.payload;
    },
    //Settimg for values by key of employeer_reducer.
    setValuesByKey: (state, action) => {
      if (action.payload['key'] !== 'workTimes')
        state.obj[action.payload['key']] = action.payload['value'];
    },
  },
  extraReducers: {
    [postEmployeeUserOBJ.pending]: (state, action) => {
      state.status = 'loading';
    },
    [postEmployeeUserOBJ.fulfilled]: (state, action) => {
      state.obj = action.payload.obj;
      state.status = 'success';
    },
    [postEmployeeUserOBJ.rejected]: (state, action) => {
      state.status = 'failed';
    },
    //_____________________________________
    [postEmployeeUserCreateUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [postEmployeeUserCreateUser.fulfilled]: (state, action) => {
      if (!action.payload.firstName) {
        state.status = 'failed';
        state.error = Object.keys(action.payload)[0];
      }
      state.status = 'success';
    },
    [postEmployeeUserCreateUser.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { setValuesByKey, setObj } = employeeUserSlice.actions;
export default employeeUserSlice.reducer;
