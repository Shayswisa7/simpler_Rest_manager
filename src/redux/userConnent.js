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
export const userSlice = createSlice({
  name: 'users',
  initialState: {
    obj: {
      username: '',
      id: '',
      phoneNumber: '',
      password: '',
      hourlyWage: {
        start: '',
        end: '',
      },
    },
    status: null,
  },
  reducers: {
    clearState: (state) => {
      state.obj.username = '';
      state.obj.id = '';
      state.obj.password = '';
      state.obj.hourlyWage.start = '';
      state.obj.hourlyWage.end = '';
      state.status = null;
    },
    logOut: (state, { payload }) => {
      state.username = payload.firstName + ' ' + payload.lastName;
      state.phoneNumOrID = payload.id;
      state.password = payload.password;
      state.hourlyWage.start = payload.state.hourlyWage.start;
      state.hourlyWage.end = new Date();
    },
  },
  extraReducers: {
    [userConnection.pending]: (state) => {
      state.status = 'loading';
    },
    [userConnection.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.obj.username = payload.firstName + ' ' + payload.lastName;
        state.obj.id = payload.id;
        state.obj.phoneNumber = payload.phoneNumber;
        state.obj.password = payload.password;
        const date = new Date();
        state.obj.hourlyWage.start = `day:${date.getDay()} / time: ${date.getHours()}:${date.getMinutes()}`;
        state.obj.hourlyWage.end = '';
        state.status = 'success';
      }
    },
    [userConnection.rejected]: (state, { payload }) => {
      state.status = 'failed';
    },
  },
});
export const { clearState, logOut } = userSlice.actions;
export default userSlice.reducer;
