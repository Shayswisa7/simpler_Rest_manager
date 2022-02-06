import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const staffListSlice = createSlice({
  name: 'staffListReducer',
  initialState: {
    obj: [],
  },
  reducers: {
    add: (state, action) => {
      state.obj.push(action.payload);
    },
    remove: (state, action) => {
      state.obj.filter((x) => x.id !== action.payload.id);
    },
  },
});

export const { add, remove } = staffListSlice.actions;
export default staffListSlice.reducer;
