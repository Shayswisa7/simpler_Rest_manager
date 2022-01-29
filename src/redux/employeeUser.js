import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const postEmployeeUser = createAsyncThunk(
  'employeeUserReducer/postEmployeeUser',
  async () => {
    const user = await axios.post('http://localhost:3001/RestDataFormats_Obj', {
      type: 'RestEmpolyees',
    });
    return user.data;
  }
);
export const employeeUserSlice = createSlice({
  name: 'employeeUserReducer',
  initialState: {
    obj: {},
    status: null,
  },
  reducers: {
    setObj: (state, action) => {
      state.obj = action.payload;
    },
    //Settimg for values by key of employeer_reducer.
    setValuesByKey: (state, action) => {
      if (
        action.payload['key'] !== 'hourlyWage' &&
        action.payload['key'] !== 'workTimes'
      )
        state.obj[action.payload['key']] = action.payload['value'];
    },
  },
  extraReducers: {
    [postEmployeeUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [postEmployeeUser.fulfilled]: (state, action) => {
      state.obj = action.payload.obj;
      state.status = 'success';
    },
    [postEmployeeUser.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { setValuesByKey, setObj } = employeeUserSlice.actions;
export default employeeUserSlice.reducer;
