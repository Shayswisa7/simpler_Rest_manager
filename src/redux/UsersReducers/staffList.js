import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const staffListSlice = createSlice({
  name: 'staffListReducer',
  initialState: {
    obj: [],
  },
  reducers: {
    listLocalS: (state, { payload }) => {
      state.obj = payload.obj;
    },
    add: (state, action) => {
      state.obj.push(action.payload);
    },
    remove: (state, { payload }) => {
      console.log(payload);
      state.obj = state.obj.filter((x) => x.id !== payload);
    },
  },
});

export const { listLocalS, add, remove } = staffListSlice.actions;
export default staffListSlice.reducer;
