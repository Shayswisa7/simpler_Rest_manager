import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import add from './staffList';
export const userConnection = createAsyncThunk(
  'users/userConnection',
  async ({ phoneNumber, password }, { dispatch, getState }) => {
    console.log(phoneNumber, password);
    const { staffList, userConnect } = getState();
    const user = await axios.post('http://localhost:3001/UserConnection', {
      type: 'Employee',
      obj: {
        id: phoneNumber,
        password: password,
      },
    });
    console.log(user.data);
    return user.data;
  }
);
export const postUserLogOut = createAsyncThunk(
  'users/postUserLogOut',
  async ({ id, workTimes }) => {
    console.log(workTimes);
    const user = await axios.post('http://localhost:3001/LogOutEmployee', {
      type: 'Employee',
      obj: {
        id: id,
        workTimes: workTimes,
      },
    });
    console.log(user.data);
    return user.data;
  }
);
export const userSlice = createSlice({
  name: 'users',
  initialState: {
    obj: {
      name: '',
      id: '',
      phoneNumber: '',
      rol: '',
      password: '',
      workTimes: {
        start: {},
        end: {},
      },
    },
    status: null,
  },
  reducers: {
    clearState: (state) => {
      state.obj.name = '';
      state.obj.id = '';
      state.obj.phoneNumber = '';
      state.obj.rol = '';
      state.obj.password = '';
      state.obj.workTimes.start = {};
      state.obj.workTimes.end = {};
      state.status = null;
    },
    logOut: (state) => {
      const date = new Date();
      state.obj.workTimes.end = {
        date: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        time: date.getHours() + ':' + date.getMinutes(),
      };
    },
  },
  extraReducers: {
    [userConnection.pending]: (state) => {
      state.status = 'loading';
    },
    [userConnection.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.obj.name = payload.firstName + ' ' + payload.lastName;
        state.obj.id = payload.id;
        state.obj.phoneNumber = payload.phoneNumber;
        state.obj.rol = payload.rol;
        state.obj.password = payload.password;
        const date = new Date();
        state.obj.workTimes.start = {
          date: date.getDate(),
          month: date.getMonth() + 1,
          year: date.getFullYear(),
          time: date.getHours() + ':' + date.getMinutes(),
        };
      }
      state.obj.workTimes.end = {};
      state.status = 'success';
    },
    [userConnection.rejected]: (state, { payload }) => {
      state.status = 'failed';
    },
  },
});
export const { clearState, logOut } = userSlice.actions;
export default userSlice.reducer;
